package A4.FourEver.domain.car.exception;

import A4.FourEver.global.exception.FourEverException;

public class CarNotFoundException extends FourEverException {

    public CarNotFoundException(Long id) {
        super(id + "를 가진 차량이 존재하지 않습니다.");
    }
}
