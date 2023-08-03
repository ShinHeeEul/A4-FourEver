package A4.FourEver.domain.trim.engine.repository;

import A4.FourEver.domain.trim.engine.domain.Engine;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EngineRepository extends CrudRepository<Engine, Long> {

    @Query("SELECT * FROM engine WHERE car_id = :car_id")
    List<Engine> findAllOnlyEngineByCarId(@Param("car_id") final Long car_id);

    @Query("SELECT * FROM engine WHERE engine_id = :engine_id")
    Optional<Engine> findOnlyEngine(@Param("engine_id") final Long engine_id);
}
