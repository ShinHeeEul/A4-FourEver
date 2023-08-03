package A4.FourEver.domain.trim.drive.repository;

import A4.FourEver.domain.trim.drive.domain.Drive;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface DriveRepository extends CrudRepository<Drive, Long> {

    @Query("SELECT * FROM drive WHERE car_id = :car_id")
    List<Drive> findAllOnlyDriveByCarId(@Param("car_id") Long car_id);

    @Query("SELECT * FROM drive WHERE drive_id = :drive_id")
    Optional<Drive> findOnlyDrive(@Param("drive_id") Long drive_id);
}