package com.app.Controller;

import com.app.Dto.CourseInfoDto;
import com.app.Service.CourseInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/course-info")
public class CourseInfoController {

    private final CourseInfoService courseInfoService;

    @Autowired
    public CourseInfoController(CourseInfoService courseInfoService) {
        this.courseInfoService = courseInfoService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<CourseInfoDto>> getAllCourseInfos() {
        List<CourseInfoDto> courseInfoDtoList = courseInfoService.getAllCourseInfos();
        return new ResponseEntity<>(courseInfoDtoList, HttpStatus.OK);
    }

    @PostMapping("/update/{tutorId}")
    public ResponseEntity<CourseInfoDto> updateCourseInfo(@PathVariable Long tutorId, @RequestBody CourseInfoDto courseInfoDto) {
        CourseInfoDto updatedCourseInfoDto = courseInfoService.updateCourseInfo(tutorId, courseInfoDto);
        if (updatedCourseInfoDto != null) {
            return new ResponseEntity<>(updatedCourseInfoDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
