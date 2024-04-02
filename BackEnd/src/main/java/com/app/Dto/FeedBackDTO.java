package com.app.Dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FeedBackDTO {
    private String name;
    private String email;
    private String message;
    private String rating;
}
