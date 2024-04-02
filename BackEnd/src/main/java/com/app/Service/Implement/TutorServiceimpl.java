package com.app.Service.Implement;

import com.app.Dto.TutorDto;
import com.app.Entity.Tutor;
import com.app.Mapper.TutorMapper;
import com.app.Repository.TutorRepo;
import com.app.Service.TutorService;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.Optional;

@Service
public class TutorServiceimpl implements TutorService {

    private final TutorRepo tutorRepo;



    public TutorServiceimpl(TutorRepo tutorRepo) {
        this.tutorRepo = tutorRepo;
    }

    @Override
    public TutorDto addTutor(TutorDto tutorDto) throws IOException {
        Tutor tutor = TutorMapper.maptoTutor(tutorDto);
        Tutor savedTutor = tutorRepo.save(tutor);
        return TutorMapper.maptoTutorDto(savedTutor);
    }

    @Override
    public TutorDto findByUsername(String fullname) {
        Tutor tutor = tutorRepo.findByfullname(fullname);
        if (tutor != null) {
            return TutorMapper.maptoTutorDto(tutor);
        }
        return null;
    }

    @Override
    public TutorDto findByid(long id) {
        Optional<Tutor> tutor = tutorRepo.findById(id);
        if (tutor.isPresent()) return TutorMapper.maptoTutorDto(tutor.get());
        else {
            return null;
        }

    }

    @Override
    public Optional<Tutor> findById(long id) {
        Optional<Tutor> tutor = tutorRepo.findById(id);
        if (tutor.isPresent()) return Optional.of(tutor.get());
        else {
            return null;
        }
    }
}
