package A4.FourEver.domain.myChiving.repository;

import A4.FourEver.domain.color.exColor.dto.ExColorNameAndImageDTO;
import A4.FourEver.domain.color.inColor.dto.InColorNameDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingDetailDTO;
import A4.FourEver.domain.myChiving.dto.MyChivingSaveDTO;
import A4.FourEver.domain.option.extraOption.dto.ExtraOptionDetailDTO;
import A4.FourEver.domain.option.extraSubOption.dto.SubExtraOptionNameDTO;
import A4.FourEver.domain.trim.body.dto.BodyNameDTO;
import A4.FourEver.domain.trim.drive.dto.DriveNameDTO;
import A4.FourEver.domain.trim.engine.dto.EngineNameDTO;
import A4.FourEver.domain.trim.trim.dto.TrimNameDTO;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.util.*;

@Repository
public class MyChivingRepositoryDefaultImpl implements MyChivingRepository {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final MyChivingDetailExtractor myChivingDetailExtractor = new MyChivingDetailExtractor();

    public MyChivingRepositoryDefaultImpl(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public Long saveMyChiving(final MyChivingSaveDTO dto, final Long userId) {
        KeyHolder keyHolder = new GeneratedKeyHolder();

        String myChivingSql = "INSERT INTO mychiving " +
                "(is_end, price, user_id, model_id, ex_color_id, in_color_id, updated_at) " +
                "SELECT :is_end, :price, :user_id, model_id, :ex_color_id, :in_color_id, Now() " +
                "FROM (" +
                "    SELECT model.id AS model_id " +
                "    FROM model " +
                "    WHERE (trim_id = :trim_id OR (trim_id IS NULL AND :trim_id IS NULL)) " +
                "    AND (engine_id = :engine_id OR (engine_id IS NULL AND :engine_id IS NULL)) " +
                "    AND (body_id = :body_id OR (body_id IS NULL AND :body_id IS NULL)) " +
                "    AND (drive_id = :drive_id OR (drive_id IS NULL AND :drive_id IS NULL)) " +
                ") AS model_id_subQuery";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("is_end", dto.getIs_end());
        params.addValue("price", dto.getPrice());
        params.addValue("user_id", userId);
        params.addValue("ex_color_id", getOrDefault(dto.getEx_color_id()));
        params.addValue("in_color_id", getOrDefault(dto.getIn_color_id()));
        params.addValue("trim_id", getOrDefault(dto.getTrim_id()));
        params.addValue("engine_id", getOrDefault(dto.getEngine_id()));
        params.addValue("body_id", getOrDefault(dto.getBody_id()));
        params.addValue("drive_id", getOrDefault(dto.getDrive_id()));

        namedParameterJdbcTemplate.update(myChivingSql, params, keyHolder);

        Number key = keyHolder.getKey();
        Long newId = key != null ? key.longValue() : null;

        if (newId == null || dto.getOptionIds().isEmpty()) {
            return newId;
        }

        String optionSql = "INSERT INTO mychiving_extra_option (mychiving_id, extra_option_id) VALUES (:mychiving_id, :extra_option_id)";
        List<SqlParameterSource> parameters = new ArrayList<>();

        for (Long optionId : dto.getOptionIds()) {
            MapSqlParameterSource paramSource = new MapSqlParameterSource();
            paramSource.addValue("mychiving_id", newId);
            paramSource.addValue("extra_option_id", optionId);
            parameters.add(paramSource);
        }

        namedParameterJdbcTemplate.batchUpdate(optionSql, parameters.toArray(new SqlParameterSource[0]));

        return newId;
    }

    @Override
    public void removeMyChiving(final Long id) {
        String optionSql = "DELETE FROM mychiving_extra_option WHERE mychiving_id = :mychiving_id;";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("mychiving_id", id);

        namedParameterJdbcTemplate.update(optionSql, params);

        String myChivingSql = "DELETE FROM mychiving WHERE id =:mychiving_id;";
        namedParameterJdbcTemplate.update(myChivingSql, params);
    }

    @Override
    public MyChivingDetailDTO findMyChivingDetail(Long id) {
        String sql = "SELECT " +
                "mc.id AS my_chiving_id, " +
                "mc.price AS price," +
                "mc.is_end AS is_end, " +
                "mc.updated_at AS updated_at, " +
                "c.name AS car_name, " +
                "t.id AS trim_id, " +
                "t.name AS trim_name, " +
                "e.id AS engine_id, " +
                "e.name AS engine_name, " +
                "b.id AS body_id, " +
                "b.name AS body_name, " +
                "d.id AS drive_id, " +
                "d.name AS drive_name, " +
                "exc.id AS exterior_color_id, " +
                "exc.name AS exterior_color_name, " +
                "exc.rotation_image AS exterior_color_rotation_image, " +
                "inc.id AS interior_color_id, " +
                "inc.name AS interior_color_name, " +
                "eo.id AS extra_option_id, " +
                "eo.name AS extra_option_name, " +
                "eo.image AS extra_option_image, " +
                "eo.x_position AS extra_option_x_position, " +
                "eo.y_position AS extra_option_y_position, " +
                "seo.id AS sub_extra_option_id, " +
                "seo.name AS sub_extra_option_name " +
                "FROM mychiving mc " +
                "JOIN model m ON mc.model_id = m.id " +
                "JOIN trim t ON m.trim_id = t.id " +
                "JOIN engine e ON m.engine_id = e.id " +
                "JOIN body b ON m.body_id = b.id " +
                "JOIN drive d ON m.drive_id = d.id " +
                "JOIN car c ON d.car_id = c.id " +
                "JOIN ex_color exc ON mc.ex_color_id = exc.id " +
                "JOIN in_color inc ON mc.in_color_id = inc.id " +
                "LEFT JOIN mychiving_extra_option meo ON meo.mychiving_id = mc.id " +
                "LEFT JOIN extra_option eo ON meo.extra_option_id = eo.id " +
                "LEFT JOIN sub_extra_option seo ON seo.extra_option_id = eo.id " +
                "WHERE mc.id = :id;";

        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("id", id);

        return namedParameterJdbcTemplate.query(sql, params, myChivingDetailExtractor);
    }

    private Long getOrDefault(Long id) {
        return (id == 0) ? null : id;
    }

    private static class MyChivingDetailExtractor implements ResultSetExtractor<MyChivingDetailDTO> {

        @Override
        public MyChivingDetailDTO extractData(ResultSet rs) throws SQLException, DataAccessException {
            MyChivingDetailDTO myChivingDetailDTO = null;
            Map<Long, ExtraOptionDetailDTO> extraOptionMap = new HashMap<>();

            while (rs.next()) {
                if (myChivingDetailDTO == null) {
                    TrimNameDTO trimNameDTO = TrimNameDTO.builder()
                            .id(rs.getLong("trim_id"))
                            .name(rs.getString("trim_name"))
                            .build();

                    EngineNameDTO engineNameDTO = EngineNameDTO.builder()
                            .id(rs.getLong("engine_id"))
                            .name(rs.getString("engine_name"))
                            .build();

                    BodyNameDTO bodyNameDTO = BodyNameDTO.builder()
                            .id(rs.getLong("body_id"))
                            .name(rs.getString("body_name"))
                            .build();

                    DriveNameDTO driveNameDTO = DriveNameDTO.builder()
                            .id(rs.getLong("drive_id"))
                            .name(rs.getString("drive_name"))
                            .build();

                    ExColorNameAndImageDTO exColorNameAndImageDTO = ExColorNameAndImageDTO.builder()
                            .id(rs.getLong("exterior_color_id"))
                            .name(rs.getString("exterior_color_name"))
                            .color_image(rs.getString("exterior_color_rotation_image"))
                            .build();

                    InColorNameDTO inColorNameDTO = InColorNameDTO.builder()
                            .id(rs.getLong("interior_color_id"))
                            .name(rs.getString("interior_color_name"))
                            .build();

                    myChivingDetailDTO = MyChivingDetailDTO.builder()
                            .id(rs.getLong("my_chiving_id"))
                            .price(rs.getDouble("price"))
                            .updated_at(rs.getTimestamp("updated_at"))
                            .trimNameDTO(trimNameDTO)
                            .engineNameDTO(engineNameDTO)
                            .bodyNameDTO(bodyNameDTO)
                            .driveNameDTO(driveNameDTO)
                            .exColorDTO(exColorNameAndImageDTO)
                            .inColorDTO(inColorNameDTO)
                            .car_name(rs.getString("car_name"))
                            .is_end(rs.getInt("is_end"))
                            .extraOptionDTOs(new HashSet<>())
                            .build();

                }

                Long extraOptionId = rs.getLong("extra_option_id");
                ExtraOptionDetailDTO extraOptionDTO = extraOptionMap.get(extraOptionId);

                if (extraOptionDTO == null) {
                    extraOptionDTO = ExtraOptionDetailDTO.builder()
                            .id(extraOptionId)
                            .name(rs.getString("extra_option_name"))
                            .image(rs.getString("extra_option_image"))
                            .x_position(rs.getInt("extra_option_x_position"))
                            .y_position(rs.getInt("extra_option_y_position"))
                            .extraOptionTagInfoDTOS(new HashSet<>())
                            .subExtraOptionNameDTOs(new HashSet<>())
                            .build();
                    extraOptionMap.put(extraOptionId, extraOptionDTO);
                    myChivingDetailDTO.getExtraOptionDTOs().add(extraOptionDTO);
                }

                SubExtraOptionNameDTO subExtraOptionNameDTO = SubExtraOptionNameDTO.builder()
                        .id(rs.getLong("sub_extra_option_id"))
                        .name(rs.getString("sub_extra_option_name"))
                        .build();
                extraOptionDTO.getSubExtraOptionNameDTOs().add(subExtraOptionNameDTO);

            }
            return myChivingDetailDTO;
        }
    }
}
