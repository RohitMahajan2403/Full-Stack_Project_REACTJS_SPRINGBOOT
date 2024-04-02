package com.app.Dto;

import lombok.Data;

@Data
public class BookingRequest {

    private String studentName;
    private  String studentEmail;
    private Long tutorId;
    private String courseName;
    private String courseLevel;
}
