package com.app.Service.Implement;

import com.app.Dto.CourseInfoDto;
import com.app.Dto.TutorDto;
import com.app.Entity.Course_Info;
import com.app.Entity.Duration;
import com.app.Entity.Language;
import com.app.Entity.Tutor;
import com.app.Mapper.CourseInfoMapper;
import com.app.Repository.CourseInfoRepository;
import com.app.Repository.DurationRepo;
import com.app.Repository.LanguageRepo;
import com.app.Repository.TutorRepo;
import com.app.Service.CourseInfoService;
import com.app.Service.DurationService;
import com.app.Service.LanguageService;
import com.app.Service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseInfoServiceImpl implements CourseInfoService {

    private final CourseInfoRepository courseInfoRepository;

    private final TutorRepo tutorRepository;

    private final LanguageService languageService;

    private final DurationService durationService;
    private final DurationRepo durationRepo;

    private final TutorService tutorService;

    @Autowired
    public CourseInfoServiceImpl(CourseInfoRepository courseInfoRepository, TutorRepo tutorRepository, LanguageService languageService, DurationService durationService, DurationRepo durationRepo, TutorService tutorService) {
        this.courseInfoRepository = courseInfoRepository;
        this.tutorRepository = tutorRepository;
        this.languageService = languageService;
        this.durationService = durationService;
        this.durationRepo = durationRepo;
        this.tutorService = tutorService;
    }

    @Override
    public CourseInfoDto createCourseInfo(CourseInfoDto courseInfoDto) {
        Course_Info entity = CourseInfoMapper.toEntity(courseInfoDto, null, null, null);
        return CourseInfoMapper.toDto(courseInfoRepository.save(entity));
    }

    @Override
    public CourseInfoDto getCourseInfoById(Long id) {
        Optional<Course_Info> CourseInfo = courseInfoRepository.findById(id);
        return CourseInfo.map(CourseInfoMapper::toDto).orElse(null);
    }

    @Override
    public List<CourseInfoDto> getAllCourseInfos() {
        List<Course_Info> courseInfos = courseInfoRepository.findAll();
        List<CourseInfoDto> courseInfoDtoList = new ArrayList<>();

        for (Course_Info courseInfo : courseInfos) {
            CourseInfoDto courseInfoDto = CourseInfoMapper.toDto(courseInfo);

            // Fetch duration for each course
            Optional<Duration> optionalDuration = durationRepo.findById(courseInfo.getDuration().getDurationID());
            if (optionalDuration.isPresent()) {
                courseInfoDto.setMonths(optionalDuration.get().getMonths());
            }

            // Set language name for each course
            Language language = languageService.findByName(courseInfo.getLanguage().getName());
            if (language != null) {
                courseInfoDto.setName(language.getName());
            } else {
                throw new IllegalArgumentException("Language not found with name: " + courseInfo.getLanguage().getName());
            }

            long tutorId = courseInfo.getTutor().getTutorId();
            Optional<Tutor> tutor = tutorService.findById(tutorId);
            if (tutor.isPresent()) {

                courseInfoDto.setTutorName(tutor.get().getFullname());
                courseInfoDto.setImage(tutor.get().getProfilePic());
            } else {
                throw new IllegalArgumentException("Tutor not found with ID: " + tutorId);
            }
            courseInfoDtoList.add(courseInfoDto);
        }

        return courseInfoDtoList;
    }


    @Override
    public CourseInfoDto updateCourseInfo(Long tutorId, CourseInfoDto courseInfoDto) {
        Optional<Tutor> tutor = tutorService.findById(tutorId);
        if (tutor.isPresent()) {
            Tutor tutor1 = tutor.get();
            Course_Info entity = new Course_Info();
            entity.setId(courseInfoDto.getId());
            entity.setCoursename(courseInfoDto.getCourseName());
            entity.setLevel(courseInfoDto.getLevel());
            entity.setCoursePrice(courseInfoDto.getCoursePrice());

            // Fetch language by ID
            Language Language = languageService.findByName(courseInfoDto.getName());
            if (Language != null) {
                entity.setLanguage(Language);
            } else {
                throw new IllegalArgumentException("Language not found with name: " + courseInfoDto.getName());
            }
            // Fetch duration by ID
            Duration duration = durationService.findByMonths(courseInfoDto.getMonths());
            if (duration != null) {
                entity.setDuration(duration);
            } else {
                throw new IllegalArgumentException("Duration not found with months: " + courseInfoDto.getMonths());
            }

            entity.setTutor(tutor1);
            return CourseInfoMapper.toDto(courseInfoRepository.save(entity));
        }
        return null;
    }


    @Override
    public void deleteCourseInfo(Long id) {
        courseInfoRepository.deleteById(id);
    }
}
