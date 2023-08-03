package A4.FourEver.domain.trim.drive.exception;

import A4.FourEver.global.exception.FourEverException;

public class DriveNotFoundException extends FourEverException {

    public DriveNotFoundException(Long id) {
        super("아이디가 " + id + "인 구동방식이 존재하지 않습니다.");
    }
}
