package A4.FourEver.global.Interceptor;

import A4.FourEver.domain.user.application.auth.JwtProvider;
import A4.FourEver.global.Resolver.AuthorizationExtractor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.List;

@Component
public class LoginInterceptor implements HandlerInterceptor {
    private final JwtProvider jwtProvider;

    public LoginInterceptor(final JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {

        String origin = request.getHeader("Origin");
        List<String> allowedOrigins = Arrays.asList("http://localhost:80",
                "http://www.hyundaimycar.store",
                "https://www.hyundaimycar.store",
                "http://www.hyundaimycar.store/",
                "https://www.hyundaimycar.store:443",
                "https://www.hyundaimycar.store/",
                "http://www.hyundaimycar.store:80",
                "https://www.hyundaimycar.store:8080",
                "https://www.hyundaimycar.store:8080/",
                "http://localhost:3000/",
                "http://localhost:3000");

        if (allowedOrigins.contains(origin)) {
            response.setHeader("Access-Control-Allow-Origin", origin);
        }
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, Location, Accept, Origin, Host, Referer, Cache-Control, Connection");

        if(request.getMethod().equals("OPTIONS")) {
            response.setStatus(200);
            return true;
        }

        if (isSwaggerRequest(request)) {
            return true;
        }

        String token = AuthorizationExtractor.extractAccessToken(request);
        jwtProvider.validateToken(token);
        return true;
    }

    private boolean isSwaggerRequest(HttpServletRequest request) {
        String uri = request.getRequestURI();
        return uri.contains("swagger") || uri.contains("api-docs") || uri.contains("webjars");
    }
}