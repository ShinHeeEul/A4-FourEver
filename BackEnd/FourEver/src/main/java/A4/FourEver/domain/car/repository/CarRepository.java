package A4.FourEver.domain.car.repository;

import A4.FourEver.domain.car.domain.Car;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface CarRepository extends CrudRepository<Car, Long> {


    @Query("SELECT * FROM car")
    List<Car> findAllOnlyCar();

    @Query("SELECT * FROM car WHERE car_id = :id")
    Optional<Car> findOnlyCar(@Param("id") Long id);
}
