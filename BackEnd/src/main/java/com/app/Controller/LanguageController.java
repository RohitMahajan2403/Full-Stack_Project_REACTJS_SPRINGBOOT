package com.app.Controller;

import com.app.Dto.LanguageDto;
import com.app.Entity.Language;
import com.app.Service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/languages")
public class LanguageController {
    private final LanguageService languageService;

    @Autowired
    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @GetMapping
    public List<Language> getAllLanguages() {
        return languageService.getAllLanguages();
    }

    @PostMapping
    public ResponseEntity<LanguageDto> createStudent(@RequestBody LanguageDto languageDto) throws IOException {
        LanguageDto languages= languageService.addLangauges(languageDto);
        return new ResponseEntity<>(languages, HttpStatus.CREATED);
    }
}
