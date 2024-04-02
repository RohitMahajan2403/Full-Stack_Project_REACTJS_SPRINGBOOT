package com.app.Service.Implement;

import com.app.Dto.StudentDto;
import com.app.Entity.Student;
import com.app.Exception.ResourceNotFound;
import com.app.Mapper.StudentMapper;
import com.app.Repository.StudentRepo;
import com.app.Service.StudentService;
import jakarta.servlet.http.HttpSession;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class StudentImpl implements StudentService  {
    private StudentRepo studentRepo;

    private final HttpSession httpSession;
    @Override
    public StudentDto createStudent(StudentDto studentDto) {

        Student students= StudentMapper.mapToStudent(studentDto);
        Student savedStudent= studentRepo.save(students);
        return StudentMapper.mapToStudentDto(savedStudent);
    }
//
//    @Override
//    public StudentDto getStudent(StudentDto studentDto) {
//
//        Student student = studentRepo.findByFullname(studentDto.getFullname());
//        if (student != null) {
//            return StudentMapper.mapToStudentDto(student);
//        }
//
//        return null;
//    }
    @Override
    public StudentDto findByfullname(String name) {
        Student student = studentRepo.findByFullname(name);
        System.out.println(student);
        if (student != null) {
            return StudentMapper.mapToStudentDto(student);
        }
        return null;
    }

    @Override
    public StudentDto findByid(long id) {
        Optional<Student> student = studentRepo.findById(id);
        if(student.isPresent()){
            return StudentMapper.mapToStudentDto(student.get());
        }
        else {
            throw new RuntimeException("Student not found");
        }
    }

    @Override
    public void changePassword(long id, String newPassword) {
        Optional<Student> student = studentRepo.findById(id);
        Student student1 = student.orElseThrow(() -> new ResourceNotFound("Student not found"));

        student1.setPassword(newPassword);
        studentRepo.save(student1);

    }

    @Override
    public void changeEmail(long id, String newEmail) {
        Optional<Student> student = studentRepo.findById(id);
        Student student1 = student.orElseThrow(() -> new ResourceNotFound("Student not found"));

        student1.setPassword(newEmail);
        studentRepo.save(student1);

    }


}
