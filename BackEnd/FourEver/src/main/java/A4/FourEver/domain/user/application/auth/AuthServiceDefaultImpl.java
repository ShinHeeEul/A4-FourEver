package A4.FourEver.domain.user.application.auth;


import A4.FourEver.domain.user.exception.InvalidAccessTokenException;
import A4.FourEver.domain.user.exception.InvalidCodeException;
import A4.FourEver.domain.user.exception.LoginStateException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class AuthServiceDefaultImpl implements AuthService{

    private final String REDIRECT_URI = "http://localhost:8080/user/login";
    private final String STATE = "softeerA4Fourever";
    @Value("${client.id}")
    private String CLIENT_ID;
    @Value("${client.secret}")
    private String CLIENT_SECRET;
    @Override
    public String getToken(String code, String state) {
        String requestBody = "grant_type=authorization_code&code=" + code + "&redirect_uri=" + REDIRECT_URI;
        String tokenResponse = tokenAPICall(requestBody);

        if(!state.equals(STATE))  {
            throw new LoginStateException();
        }

        ObjectMapper accessTokenObjectMapper = new ObjectMapper();
        String hyundaiAccessToken;
        String hyundaiRefreshToken = "";
        try {
            JsonNode TokenRoot = accessTokenObjectMapper.readTree(tokenResponse);
            hyundaiAccessToken = TokenRoot.path("access_token").asText(); // Response에서 AccessToken 값 추출
            hyundaiRefreshToken = TokenRoot.path("refresh_token").asText(); // Response에서 refreshToken 값 추출
        } catch(JsonProcessingException e) {
            throw new LoginStateException();
        }

        return getUserEmail(hyundaiAccessToken);
    }

    private String getUserEmail(String hyundaiAccessToken) {
        String apiURL = "https://prd.kr-ccapi.hyundai.com/api/v1/user/profile";

        String authorization = "Bearer " + hyundaiAccessToken;
        String responseData;

        ObjectMapper accessTokenObjectMapper = new ObjectMapper();

        try{
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod("GET");

            con.setRequestProperty("Authorization", authorization);

            int responseCode = con.getResponseCode();
            BufferedReader br;
            if(responseCode == HttpURLConnection.HTTP_OK){
                br = new BufferedReader(new InputStreamReader(con.getInputStream())); // 정상호출
            }
            else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream())); // 에러발생
            }

            StringBuilder sb = new StringBuilder();
            while ((responseData = br.readLine()) != null){
                sb.append(responseData);
            }
            br.close();

            responseData = sb.toString();

        } catch(Exception e) {
            throw new InvalidAccessTokenException();
        }

        String email;
        try {
            JsonNode TokenRoot = accessTokenObjectMapper.readTree(responseData);
            email  = TokenRoot.path("email").asText(); // Response에서 AccessToken 값 추출
        } catch(JsonProcessingException e) {
            throw new LoginStateException();
        }

        return email;
    }


    private String tokenAPICall(String requestBody){

        StringBuilder sb;
        String responseData;

        String apiURL = "https://prd.kr-ccapi.hyundai.com/api/v1/user/oauth2/token?" + requestBody;

        String token = "Basic " + Base64.encodeBase64String((CLIENT_ID + ":" + CLIENT_SECRET).getBytes());
        String contentType = "application/x-www-form-urlencoded";

        try{
            URL url = new URL(apiURL);
            HttpURLConnection con = (HttpURLConnection)url.openConnection();
            con.setRequestMethod("POST");

            // Set Header Info
            con.setRequestProperty("Authorization", token);
            con.setRequestProperty("Content-Type", contentType);

            // Body data 전송
            con.setDoOutput(true);

            try (DataOutputStream output = new DataOutputStream(con.getOutputStream())){
                output.writeBytes(requestBody);
                output.flush();
            } catch(Exception e) {
                throw new InvalidCodeException();
            }

            int responseCode = con.getResponseCode();
            BufferedReader br;
            if(responseCode == HttpURLConnection.HTTP_OK){
                br = new BufferedReader(new InputStreamReader(con.getInputStream())); // 정상호출
            } else {
                br = new BufferedReader(new InputStreamReader(con.getErrorStream())); // 에러발생
            }

            sb = new StringBuilder();
            while ((responseData = br.readLine()) != null){
                sb.append(responseData);
            }
            br.close();


        } catch (Exception e) {
            throw new InvalidCodeException();
        }

        return sb.toString();
    }
}
