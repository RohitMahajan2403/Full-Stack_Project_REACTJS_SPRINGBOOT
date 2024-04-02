package com.app.Mapper;

import com.app.Dto.StudentDto;
import com.app.Entity.Student;
import org.springframework.stereotype.Component;

@Component
public class StudentMapper {

    public static StudentDto mapToStudentDto(Student student) {
        return new StudentDto(
                student.getId(),
                student.getFullname(),
                student.getEmail(),
                student.getContact(),
                student.getRole(),
                student.getPassword()
        );
    }

    public static Student mapToStudent(StudentDto studentDto) {
        return new Student(
                studentDto.getId(),
                studentDto.getFullname(),
                studentDto.getEmail(),
                studentDto.getContact(),
                studentDto.getPassword(),
                studentDto.getRole()
        );
    }
}
