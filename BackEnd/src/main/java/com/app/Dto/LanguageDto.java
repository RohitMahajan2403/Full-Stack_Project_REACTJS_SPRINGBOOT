package com.app.Dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LanguageDto {

    private Long languageId;
    private String name;
    public LanguageDto(String name) {
        this.name = name;
    }
}
