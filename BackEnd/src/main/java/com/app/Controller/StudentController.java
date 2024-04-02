package com.app.Controller;

import com.app.Dto.ChangeEmailRequest;
import com.app.Dto.ChangePasswordRequest;
import com.app.Dto.StudentDto;
import com.app.Entity.Student;
import com.app.Repository.StudentRepo;
import com.app.Service.StudentService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/Student")
public class StudentController {

   private StudentService studentService;

   @Autowired
    public StudentController(StudentService studentService, HttpSession httpSession) {
        this.studentService = studentService;
   }


    @PostMapping
    public ResponseEntity<?> createStudent(@RequestBody StudentDto studentDto){
        StudentDto savedstudent = studentService.createStudent(studentDto);
        return new ResponseEntity<>(savedstudent, HttpStatus.CREATED);
    }


    @GetMapping("/details/{id}")
    public ResponseEntity<StudentDto> getStudent(@PathVariable long id){
        StudentDto savedstudent = studentService.findByid(id);
        return new ResponseEntity<>(savedstudent, HttpStatus.OK);
    }

    @GetMapping("/changepassword/{userId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> ChangePassword(@PathVariable long userId, @RequestBody ChangePasswordRequest request){
        studentService.changePassword(userId, request.getNewPassword());
        return new ResponseEntity<>(HttpStatus.OK);
    }
    @GetMapping("/changeemail/{userId}")
    public ResponseEntity<?> ChangePassword(@PathVariable long userId, @RequestBody ChangeEmailRequest request){
        studentService.changePassword(userId, request.getNewEmail());
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
