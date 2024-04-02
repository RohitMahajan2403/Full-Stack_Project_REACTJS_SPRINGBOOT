package com.app.Service;

import com.app.Dto.LanguageDto;
import com.app.Entity.Language;

import java.io.IOException;
import java.util.List;

public interface LanguageService {
    List<Language> getAllLanguages();

    Language findByName(String name);

    Language save(LanguageDto languageDto);

    LanguageDto addLangauges(LanguageDto languageDto) throws IOException;


}
