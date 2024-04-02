package com.app.Controller;

import com.app.Dto.StudentDto;
import com.app.Dto.TutorDto;
import com.app.Mapper.StudentMapper;
import com.app.Mapper.TutorMapper;
import com.app.Service.StudentService;
import com.app.Service.TutorService;
import com.fasterxml.jackson.databind.JsonNode;

import jakarta.servlet.http.HttpSession;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;


@RestController
@CrossOrigin
public class LoginController {


    private final StudentService studentService;
    private final TutorService tutorService;

    @Autowired
    public LoginController(StudentService studentService,TutorService tutorService) {
        this.studentService = studentService;
        this.tutorService = tutorService;
    }


    @PostMapping("login")
    public ResponseEntity<?> login(@RequestBody JsonNode loginData) {
        String name = loginData.get("name").asText();
        String password = loginData.get("password").asText();
        String role = loginData.get("role").asText();
//         System.out.println(name + " " + password + " " + role);
        // Fetch user from the database using the provided fullname
        StudentDto studentDto = studentService.findByfullname(name);
        TutorDto tutorDto = tutorService.findByUsername(name);

        // Check if user exists and password matches based on role

        if (studentDto !=null && role.equals(studentDto.getRole())&& studentDto.getPassword().equals(password)) {
            Map<String, Object> responseData = new HashMap<>();
            responseData.put("id", studentDto.getId());
            responseData.put("role", "student");
            return ResponseEntity.ok().body(responseData);

        }else if (tutorDto != null && role.equals(tutorDto.getRole()) && tutorDto.getPassword().equals(password)) {

            Map<String,Object> responseData= new HashMap<>();
            responseData.put("id",tutorDto.getTutorId());
            responseData.put("role","tutor");
            return ResponseEntity.ok().body(responseData);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
        }

    }



}
