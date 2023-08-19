package A4.FourEver.domain.myChiving.repository;

import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;

import java.sql.PreparedStatement;
import java.sql.Statement;

import A4.FourEver.domain.myChiving.dto.MyChivingRequestDTO;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MyChivingRepositoryDefaultImpl implements MyChivingRepository {

    private final JdbcTemplate jdbcTemplate;

    public MyChivingRepositoryDefaultImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public void saveMyChiving(final MyChivingRequestDTO dto, final Long userId) {
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
                    ps.setDouble(2, dto.getPrice());
                    ps.setLong(3, userId);
                    ps.setLong(4, dto.getEx_color_id());
                    ps.setLong(5, dto.getIn_color_id());
                    ps.setTimestamp(6, dto.getUpdated_at());
                    ps.setLong(7, dto.getTrim_id());
                    ps.setLong(8, dto.getEngine_id());
                    ps.setLong(9, dto.getBody_id());
                    ps.setLong(10, dto.getDrive_id());

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
    }

    @Override
    public void removeMyChiving(final Long id) {
        String optionSql = "DELETE FROM mychiving_extra_option WHERE mychiving_id = ?;";
        jdbcTemplate.update(optionSql, id);

        String myChivingSql = "DELETE FROM mychiving WHERE mychiving_id = ?;";
        jdbcTemplate.update(myChivingSql, id);
    }
}
