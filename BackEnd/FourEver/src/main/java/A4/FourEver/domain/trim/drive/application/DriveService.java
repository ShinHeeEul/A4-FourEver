package A4.FourEver.domain.trim.drive.application;

import A4.FourEver.domain.trim.drive.domain.Drive;
import A4.FourEver.domain.trim.drive.dto.DriveDTO;
import A4.FourEver.domain.trim.drive.dto.DriveMapper;
import A4.FourEver.domain.trim.drive.exception.DriveNotFoundException;
import A4.FourEver.domain.trim.drive.repository.DriveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DriveService {


    private final DriveRepository driveRepository;
    private final DriveMapper driveMapper;

    @Autowired
    public DriveService(DriveRepository driveRepository, DriveMapper driveMapper) {
        this.driveRepository = driveRepository;
        this.driveMapper = driveMapper;
    }

    public List<DriveDTO> getAllDrivesByCarId(Long car_id) {
        return driveMapper.toDriveDTOList(driveRepository.findAllOnlyDriveByCarId(car_id));
    }

    public DriveDTO getDriveById(Long drive_id) {
        Drive drive = driveRepository.findOnlyDrive(drive_id).orElseThrow(() -> new DriveNotFoundException(drive_id));
        return driveMapper.toDriveDTO(drive);
    }
}
