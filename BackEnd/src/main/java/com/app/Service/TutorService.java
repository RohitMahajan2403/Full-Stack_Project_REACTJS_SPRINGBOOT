package com.app.Service;

import com.app.Dto.TutorDto;
import com.app.Entity.Tutor;

import java.io.IOException;
import java.util.Optional;

public interface TutorService {



    TutorDto addTutor(TutorDto tutorDto) throws IOException;

    TutorDto findByUsername(String username);

    TutorDto findByid(long id);

    Optional<Tutor> findById(long id);
}
