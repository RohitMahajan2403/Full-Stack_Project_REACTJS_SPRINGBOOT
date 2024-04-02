package com.app.Repository;

import com.app.Entity.Course_Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseInfoRepository extends JpaRepository<Course_Info, Long> {
    // You can define custom query methods here if needed
}
