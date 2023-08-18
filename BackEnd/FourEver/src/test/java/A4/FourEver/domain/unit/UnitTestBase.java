package A4.FourEver.domain.unit;

import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith({SoftAssertionsExtension.class, MockitoExtension.class})
public class UnitTestBase {

    @InjectSoftAssertions
    public SoftAssertions softAssertions;
}
