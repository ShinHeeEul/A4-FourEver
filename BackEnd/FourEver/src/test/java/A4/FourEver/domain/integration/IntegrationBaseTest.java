package A4.FourEver.domain.integration;

import io.restassured.RestAssured;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(SoftAssertionsExtension.class)
class IntegrationBaseTest {

    @LocalServerPort
    public int port;

    @InjectSoftAssertions
    public SoftAssertions softAssertions;

    @BeforeEach
    void setup() {
        RestAssured.port = port;
    }
}
