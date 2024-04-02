package com.app.Dto;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class TutorDto {
    private long tutorId;

    private byte[] profilePic;

    private String fullname;

    private String email;

    private String language;


    private String proficiencyLevel;

    private byte[] certificate;

    private String password;


    private String role="tutor";



}
