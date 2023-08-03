package A4.FourEver.domain.trim.trim.repository;

import A4.FourEver.domain.trim.trim.domain.Trim;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface TrimRepository extends CrudRepository<Trim, Long> {

    @Query("SELECT * FROM trim WHERE car_id = :car_id")
    List<Trim> findAllOnlyTrimByCarId(@Param("car_id") final Long car_id);

    @Query("SELECT * FROM trim WHERE trim_id = :trim_id")
    Optional<Trim> findOnlyTrim(@Param("trim_id") final Long trim_id);
}
