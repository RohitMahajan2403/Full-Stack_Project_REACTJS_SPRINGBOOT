package com.app.Service;

import com.app.Dto.CourseInfoDto;

import java.util.List;

public interface CourseInfoService {
    CourseInfoDto createCourseInfo(CourseInfoDto courseInfoDto);
    CourseInfoDto getCourseInfoById(Long id);
    List<CourseInfoDto> getAllCourseInfos();
    CourseInfoDto updateCourseInfo(Long id, CourseInfoDto courseInfoDto);
    void deleteCourseInfo(Long id);
}
