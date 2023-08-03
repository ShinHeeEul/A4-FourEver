package A4.FourEver.domain.trim.body.repository;

import A4.FourEver.domain.trim.body.domain.Body;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BodyRepository extends CrudRepository<Body, Long> {

    @Query("SELECT * FROM body WHERE car_id = :car_id")
    List<Body> findAllOnlyBodyByCarId(@Param("car_id") Long car_id);

    @Query("SELECT * FROM body WHERE body_id = :body_id")
    Optional<Body> findOnlyBody(@Param("body_id") Long body_id);
}
