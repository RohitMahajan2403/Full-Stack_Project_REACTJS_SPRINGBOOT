package com.app.Service;

import com.app.Dto.StudentDto;
import org.springframework.stereotype.Service;


public interface StudentService {

    StudentDto createStudent(StudentDto studentDto);

//    StudentDto getStudent(StudentDto studentDto);

    StudentDto findByfullname(String name);

    StudentDto findByid(long id);

    void changePassword(long id, String newPassword);

    void changeEmail(long id, String newEmail);



}
