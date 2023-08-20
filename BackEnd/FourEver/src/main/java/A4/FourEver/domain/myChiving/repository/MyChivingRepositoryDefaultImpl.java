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
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.*;
import java.time.LocalDateTime;
import java.util.*;

@Repository
public class MyChivingRepositoryDefaultImpl implements MyChivingRepository {


    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    private static final MyChivingDetailExtractor myChivingDetailExtractor = new MyChivingDetailExtractor();
    public MyChivingRepositoryDefaultImpl(JdbcTemplate jdbcTemplate, NamedParameterJdbcTemplate  namedParameterJdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    @Override
    public Long saveMyChiving(final MyChivingSaveDTO dto, final Long userId) {
        KeyHolder keyHolder = new GeneratedKeyHolder();

        String myChivingSql = "INSERT INTO mychiving " +
                "(is_end, price, user_id, model_id, ex_color_id, in_color_id, updated_at) " +
                "SELECT ?, ?, ?, model_id, ?, ?, ? " +
                "FROM (" +
                "    SELECT model.id AS model_id " +
                "    FROM model " +
                "    WHERE trim_id = ? AND engine_id = ? AND body_id = ? AND drive_id = ?" +
                ") AS model_id_subquery";


        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection.prepareStatement(myChivingSql, Statement.RETURN_GENERATED_KEYS);

                    ps.setInt(1, dto.getIs_end());
                    ps.setDouble(2, dto.getPrice()==0?41980000:dto.getPrice());
                    ps.setLong(3, userId);
                    setDefaultOrId(ps, dto.getEx_color_id(), 4);
                    setDefaultOrId(ps, dto.getIn_color_id(), 5);
                    ps.setTimestamp(6, Timestamp.valueOf(LocalDateTime.now()));
                    setDefaultOrId(ps, dto.getTrim_id(), 7);
                    setDefaultOrId(ps, dto.getEngine_id(), 8);
                    setDefaultOrId(ps, dto.getBody_id(), 9);
                    setDefaultOrId(ps, dto.getEngine_id(), 10);

                    return ps;
                },
                keyHolder
        );

        long newId = keyHolder.getKey().longValue();

        String optionSql = "INSERT INTO mychiving_extra_option (mychiving_id, extra_option_id) VALUES (?, ?)";
        List<Object[]> batchArgs = new ArrayList<>();

        for (Long optionId : dto.getOptionIds()) {
            Object[] values = new Object[]{newId, optionId};
            batchArgs.add(values);
        }
        jdbcTemplate.batchUpdate(optionSql, batchArgs);

        return newId;
    }



    @Override
    public void removeMyChiving(final Long id) {
        String optionSql = "DELETE FROM mychiving_extra_option WHERE mychiving_id = ?;";
        jdbcTemplate.update(optionSql, id);

        String myChivingSql = "DELETE FROM mychiving WHERE id = ?;";
        jdbcTemplate.update(myChivingSql, id);
    }

    @Override
    public Long updateMyChiving(final MyChivingSaveDTO dto, final Long userId) {
        long myChiving_id = dto.getMyChiving_id();

        String myChivingSql = "UPDATE mychiving mc\n" +
                "SET mc.is_end = ?,\n" +
                "    mc.price = ?,\n" +
                "    mc.ex_color_id = ?,\n" +
                "    mc.in_color_id = ?,\n" +
                "    mc.updated_at = ?\n" +
                "WHERE mc.user_id = ? \n" +
                "  AND mc.model_id IN (\n" +
                "      SELECT m.id\n" +
                "      FROM model m\n" +
                "      WHERE m.trim_id = ?\n" +
                "        AND m.engine_id = ?\n" +
                "        AND m.body_id = ?\n" +
                "        AND m.drive_id = ?\n" +
                "  );\n";

        jdbcTemplate.update(
                connection -> {
                    PreparedStatement ps = connection.prepareStatement(myChivingSql, Statement.RETURN_GENERATED_KEYS);

                    ps.setInt(1, dto.getIs_end());
                    ps.setDouble(2, dto.getPrice()==0?41980000:dto.getPrice());
                    setDefaultOrId(ps, dto.getEx_color_id(), 3);
                    setDefaultOrId(ps, dto.getIn_color_id(), 4);
                    ps.setTimestamp(5, Timestamp.valueOf(LocalDateTime.now()));
                    ps.setLong(6, dto.getMyChiving_id());
                    setDefaultOrId(ps, dto.getTrim_id(), 7);
                    setDefaultOrId(ps, dto.getEngine_id(), 8);
                    setDefaultOrId(ps, dto.getBody_id(), 9);
                    setDefaultOrId(ps, dto.getDrive_id(), 10);

                    return ps;
                }
        );

        String optionSql = "INSERT INTO mychiving_extra_option (mychiving_id, extra_option_id) VALUES (?, ?)";
        List<Object[]> batchArgs = new ArrayList<>();

        for (Long optionId : dto.getOptionIds()) {
                Object[] values = new Object[]{myChiving_id, optionId};
            batchArgs.add(values);
        }
            jdbcTemplate.batchUpdate(optionSql, batchArgs);

        return myChiving_id;
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

    private void setDefaultOrId(PreparedStatement ps, Long id, int index) throws SQLException{
        ps.setLong(index, (id==0)? 1L : id);
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
