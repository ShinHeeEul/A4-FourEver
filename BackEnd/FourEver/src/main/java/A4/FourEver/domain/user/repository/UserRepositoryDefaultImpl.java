package A4.FourEver.domain.user.repository;

import A4.FourEver.domain.user.domain.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;


@Repository
public class UserRepositoryDefaultImpl implements UserRepository {

    private final JdbcTemplate jdbcTemplate;
    private static final UserRowMapper userRowMapper = new UserRowMapper();

    public UserRepositoryDefaultImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public User findUserById(Long id) {
        String sql = "SELECT * FROM Users WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{id}, userRowMapper);
        } catch (org.springframework.dao.EmptyResultDataAccessException ex) {
            return null; // 데이터가 없을 경우 null 반환
        }
    }

    public User findUserByEmail(String userEmail) {
        String sql = "select * from Users where email = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{userEmail}, userRowMapper);
        } catch (org.springframework.dao.EmptyResultDataAccessException ex) {
            return null; // 데이터가 없을 경우 null 반환
        }
    }

    @Override
    public Long saveOrFindUser(String userEmail) {
        User user = findUserByEmail(userEmail);
        if(user == null) {
            saveUser(userEmail);
            user = findUserByEmail(userEmail);
        }

        return user.getId();
    }

    private void saveUser(String userEmail) {
        String sql = "insert into Users(email) values (?)";
        jdbcTemplate.update(sql, userEmail);
    }


    private static class UserRowMapper implements RowMapper<User> {

        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            return User.builder()
                    .id(rs.getLong("id"))
                    .email(rs.getString("email"))
                    .build();
        }
    }
}
