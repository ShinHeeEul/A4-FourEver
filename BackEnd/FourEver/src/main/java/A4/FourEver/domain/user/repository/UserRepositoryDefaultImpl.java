package A4.FourEver.domain.user.repository;

import A4.FourEver.domain.user.domain.User;
import org.springframework.dao.EmptyResultDataAccessException;
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
        String sql = "SELECT * FROM users WHERE id = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{id}, userRowMapper);
        } catch (EmptyResultDataAccessException ex) {
            return null;
        }
    }

    @Override
    public User findUserByEmail(String userEmail) {
        String sql = "select * from users where email = ?";
        try {
            return jdbcTemplate.queryForObject(sql, new Object[]{userEmail}, userRowMapper);
        } catch (EmptyResultDataAccessException ex) {
            return null;
        }
    }


    @Override
    public void saveUser(String email, String password) {
        String sql = "insert into users(email, password) values (?, ?)";
        jdbcTemplate.update(sql, email, password);
    }


    private static class UserRowMapper implements RowMapper<User> {
        @Override
        public User mapRow(ResultSet rs, int rowNum) throws SQLException {
            return User.builder()
                    .id(rs.getLong("id"))
                    .email(rs.getString("email"))
                    .password(rs.getString("password"))
                    .build();
        }
    }
}
