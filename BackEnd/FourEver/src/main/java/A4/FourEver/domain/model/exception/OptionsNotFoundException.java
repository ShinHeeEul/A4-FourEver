package A4.FourEver.domain.model.exception;

import A4.FourEver.global.exception.NotFoundException;

public class OptionsNotFoundException extends NotFoundException {
    public OptionsNotFoundException(Long trimId, Long engineId, Long bodyId, Long driveId) {
        super("트림 아이디: " + trimId + " 엔진 아이디: " + engineId + " 바디타입 아이디: " + bodyId + " 구동방식 아이디: " + driveId + " 중에 유효하지 않은 아이디가 있습니다.");
    }
}
