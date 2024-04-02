package com.app.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseInfoDto {
        private Long id;
        private String courseName;
        private String level;
        private String coursePrice;
        private Long tutorId;
        private String name;
        private int months;
        private String tutorName;
        private byte[] image;
}
