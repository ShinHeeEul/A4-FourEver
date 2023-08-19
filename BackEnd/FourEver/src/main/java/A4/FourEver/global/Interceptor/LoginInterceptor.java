package A4.FourEver.global.Interceptor;

import A4.FourEver.domain.user.application.auth.JwtProvider;
import A4.FourEver.global.Resolver.AuthorizationExtractor;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class LoginInterceptor implements HandlerInterceptor {
    private final JwtProvider jwtProvider;

    public LoginInterceptor(final JwtProvider jwtProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {
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