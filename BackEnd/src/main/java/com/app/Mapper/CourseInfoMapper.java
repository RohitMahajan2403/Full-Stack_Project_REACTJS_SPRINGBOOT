package com.app.Mapper;

import com.app.Dto.CourseInfoDto;
import com.app.Entity.Course_Info;
import com.app.Entity.Duration;
import com.app.Entity.Language;
import com.app.Entity.Tutor;

public class CourseInfoMapper {
    public static CourseInfoDto toDto(Course_Info entity) {
        CourseInfoDto dto = new CourseInfoDto();
        dto.setId(entity.getId());
        dto.setCourseName(entity.getCoursename());
        dto.setLevel(entity.getLevel());
        dto.setCoursePrice(entity.getCoursePrice());
        if(entity.getTutor() != null) {
            dto.setTutorId(entity.getTutor().getTutorId());
        }
        if(entity.getLanguage() != null) {
            dto.setName(entity.getLanguage().getName());
        }
        if(entity.getDuration() != null) {
            dto.setMonths(entity.getDuration().getMonths());
        }
        return dto;
    }

    public static Course_Info toEntity(CourseInfoDto dto, Tutor tutor, Language language, Duration duration) {
        Course_Info entity = new Course_Info();
        entity.setId(dto.getId());
        entity.setCoursename(dto.getCourseName());
        entity.setLevel(dto.getLevel());
        entity.setCoursePrice(dto.getCoursePrice());
        entity.setTutor(tutor);
        entity.setLanguage(language);
        entity.setDuration(duration);
        return entity;
    }


}
