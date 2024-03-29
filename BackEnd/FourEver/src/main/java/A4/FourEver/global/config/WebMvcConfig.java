package A4.FourEver.global.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:80",
                        "http://www.hyundaimycar.store",
                        "https://www.hyundaimycar.store",
                        "http://www.hyundaimycar.store/",
                        "https://www.hyundaimycar.store:443",
                        "https://www.hyundaimycar.store/",
                        "http://www.hyundaimycar.store:80",
                        "https://www.hyundaimycar.store:8080",
                        "https://www.hyundaimycar.store:8080/",
                        "http://localhost:3000/",
                        "http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("Content-Type", "Authorization", "Location",
                        "Accept", "Origin", "Host", "Referer",
                        "Cache-Control", "Connection")
                .allowCredentials(true)
                .maxAge(3600);
    }
}
