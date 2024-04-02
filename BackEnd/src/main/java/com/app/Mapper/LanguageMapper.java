package com.app.Mapper;

import com.app.Dto.LanguageDto;
import com.app.Entity.Language;
import org.springframework.stereotype.Component;

@Component
public class LanguageMapper {

    public static Language mapToEntity(LanguageDto dto) {
        Language language = new Language();
        language.setLanguageId(dto.getLanguageId());
        language.setName(dto.getName());
        return language;
    }

    public static LanguageDto mapToDto(Language language){
        LanguageDto dto = new LanguageDto();
        dto.setLanguageId(language.getLanguageId());
        dto.setName(language.getName());
        return dto;
    }
}

