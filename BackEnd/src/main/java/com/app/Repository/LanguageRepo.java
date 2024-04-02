package com.app.Repository;

import com.app.Entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepo extends JpaRepository<Language,Long> {


    Language findByName(String name);
}
