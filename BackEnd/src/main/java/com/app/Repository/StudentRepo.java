package com.app.Repository;

import com.app.Entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student,Long> {
    Student findByFullname(String fullname);


    Optional<Student> findById(long id);
}
