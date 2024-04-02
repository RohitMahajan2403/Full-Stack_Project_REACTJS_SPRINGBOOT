package com.app.Repository;

import com.app.Entity.Tutor;
import org.jetbrains.annotations.NotNull;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorRepo extends JpaRepository<Tutor,Long> {
    Tutor findByfullname(String fullname);

}
