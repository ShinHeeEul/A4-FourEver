package A4.FourEver.domain.car.dto;

import A4.FourEver.domain.car.domain.Car;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Component
public class CarMapper {

    public CarInfoDTO toCarInfoDTO(final Car car) {
        return CarInfoDTO.builder()
                .car_id(car.getCar_id())
                .name(car.getName())
                .build();
    }

    public List<CarInfoDTO> toCarInfoDTOList(final Iterable<Car> cars) {
        return StreamSupport.stream(cars.spliterator(), false)
                .map(this::toCarInfoDTO)
                .collect(Collectors.toList());
    }
}
