package A4.FourEver.domain.trim.drive.exception;

import A4.FourEver.global.exception.NotFoundException;

public class DriveNotFoundException extends NotFoundException {

    public DriveNotFoundException(final Long id) {
        super("아이디가 " + id + "인 구동방식이 존재하지 않습니다.");
    }
}
