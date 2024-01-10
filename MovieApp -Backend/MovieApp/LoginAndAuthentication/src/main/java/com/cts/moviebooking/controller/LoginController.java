package com.cts.moviebooking.controller;

import com.cts.moviebooking.dto.LoginResponseDto;
import com.cts.moviebooking.dto.UserDetailsResponseDto;
import com.cts.moviebooking.exception.ExternalServiceException;
import com.cts.moviebooking.exception.InvalidCredentialsException;
import com.cts.moviebooking.kafka.UserDetailsRetrievedConsumer;
import com.cts.moviebooking.security.AuthenticationService;
import com.cts.moviebooking.service.LoginService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.LinkedHashMap;
import java.util.concurrent.CompletableFuture;

@CrossOrigin("*")
@RestController
@RequestMapping(path = "/api/v1/auth")
public class LoginController {

    private final LoginService loginService;
    private final AuthenticationService authenticationService;

    private final UserDetailsRetrievedConsumer userDetailsRetrievedConsumer;

    @Autowired
    public LoginController(LoginService loginService, AuthenticationService authenticationService,UserDetailsRetrievedConsumer userDetailsRetrievedConsumer) {
        this.loginService = loginService;
        this.authenticationService = authenticationService;
        this.userDetailsRetrievedConsumer=userDetailsRetrievedConsumer;
        
        
    }

    @GetMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestParam String userName, @RequestParam String password,HttpServletResponse response) {

        try {
            ResponseEntity<?> userDetailsResponse = loginService.getLoginDetails(userName, password);

            if (userDetailsResponse.getBody() instanceof LinkedHashMap) {
                LinkedHashMap<?, ?> responseBody = (LinkedHashMap<?, ?>) userDetailsResponse.getBody();
                UserDetailsResponseDto userDetails = mapToUserDetails(responseBody);

                System.out.println("token from consumer string :-"+userDetailsRetrievedConsumer.getJwtToken());

                CompletableFuture<String> jwtTokenFuture = userDetailsRetrievedConsumer.consume(userDetails);

                try {
                    String jwtToken = jwtTokenFuture.get();
//                    response.addHeader("token", jwtToken);
                    System.out.println("in controller" + jwtToken);
                } catch (Exception e) {
                    e.printStackTrace();

                }

//                response.addHeader("userName", userDetails.getUserName());
                userDetails.setPassword(null);
                LoginResponseDto newLoginDto = new LoginResponseDto();
                newLoginDto.setToken(jwtTokenFuture.get());
                newLoginDto.setUserName(userName);
                
                return ResponseEntity.ok(newLoginDto);
//                		( newLoginResponseDto(jwtTokenFuture.get().toString(), userName));
            } else {
                return ResponseEntity.status(500).body("Unexpected response format");
            }
        } catch (InvalidCredentialsException e) {
            return handleException(HttpStatus.UNAUTHORIZED, "Invalid credentials", e);
        } catch (ExternalServiceException e) {
            return handleException(HttpStatus.INTERNAL_SERVER_ERROR, "Error calling user service please check the credentials", e);
        } catch (Exception e) {
            return handleException(HttpStatus.INTERNAL_SERVER_ERROR, "Internal Server Error", e);
        }
    }

    private ResponseEntity<String> handleException(HttpStatus status, String message, Exception e) {
        return ResponseEntity.status(status).body(message);
    }
    

    private UserDetailsResponseDto mapToUserDetails(LinkedHashMap<?, ?> responseBody) {
        // Map values from the LinkedHashMap to UserDetailsResponseDto
        UserDetailsResponseDto userDetails = new UserDetailsResponseDto();
        userDetails.setEmail((String) responseBody.get("email"));
        userDetails.setUserName((String) responseBody.get("userName"));
        userDetails.setFirstName((String) responseBody.get("firstName"));
        userDetails.setPassword((String) responseBody.get("password"));
        userDetails.setRole((String) responseBody.get("role"));

        return userDetails;
    }

   
}