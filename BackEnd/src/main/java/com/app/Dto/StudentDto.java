package com.app.Dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class StudentDto {

    private long id;

    private String fullname;

    private String email;

    private int contact;

    private String role="student";

    private String password;

}
