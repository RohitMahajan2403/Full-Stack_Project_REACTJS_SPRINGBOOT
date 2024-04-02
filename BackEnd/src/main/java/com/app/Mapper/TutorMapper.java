package com.app.Mapper;

import com.app.Dto.TutorDto;
import com.app.Entity.Tutor;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class TutorMapper {
    public static TutorDto maptoTutorDto(Tutor tutors){

            return new TutorDto(
                    tutors.getTutorId(),
                    tutors.getProfilePic(),
                    tutors.getFullname(),
                    tutors.getEmail(),
                    tutors.getLanguage(),
                    tutors.getProficiencyLevel(),
                    tutors.getCertificate(),
                    tutors.getPassword(),
                    tutors.getRole()

            );
    }

    public static Tutor maptoTutor(TutorDto tutorDto) throws IOException {
        return new Tutor(
                tutorDto.getTutorId(),
                tutorDto.getProfilePic(),
                tutorDto.getFullname(),
                tutorDto.getEmail(),
                tutorDto.getLanguage(),
                tutorDto.getProficiencyLevel(),
                tutorDto.getCertificate(),
                tutorDto.getPassword(),
                tutorDto.getRole()


        );
    }


}
