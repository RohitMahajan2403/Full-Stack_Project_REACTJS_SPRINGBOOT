package com.app.Service.Implement;

import com.app.Dto.LanguageDto;
import com.app.Entity.Language;
import com.app.Mapper.LanguageMapper;
import com.app.Repository.LanguageRepo;
import com.app.Service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class LanguageServiceImpl implements LanguageService {
    private final LanguageRepo languageRepository;

    @Autowired
    public LanguageServiceImpl(LanguageRepo languageRepository) {
        this.languageRepository = languageRepository;
    }

    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }

    @Override
    public Language findByName(String name) {
        return languageRepository.findByName(name);
    }
    @Override
    public Language save(LanguageDto languageDto) {
        Language language = new Language();
        // Map attributes from languageDto to language
        return languageRepository.save(language);
    }
    @Override
    public LanguageDto addLangauges(LanguageDto languageDto) throws IOException {

        if (languageDto != null) {
            Language language = LanguageMapper.mapToEntity(languageDto);
            languageRepository.save(language);
            return LanguageMapper.mapToDto(language);
        }

        return null;
    }

}
