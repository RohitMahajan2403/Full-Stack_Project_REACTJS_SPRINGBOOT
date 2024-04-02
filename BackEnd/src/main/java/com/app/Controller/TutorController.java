package com.app.Controller;

import com.app.Dto.StudentDto;
import com.app.Dto.TutorDto;
import com.app.Service.TutorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.MediaType;

import java.io.IOException;

@RestController
@RequestMapping("/tutor")
@CrossOrigin(origins = "http://localhost:3000")
public class TutorController {
    private final TutorService tutorService;

    public TutorController(TutorService tutorService) {
        this.tutorService = tutorService;
    }

    @PostMapping(value = "/tutors", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<?> addTutor(@RequestPart("profilePic") MultipartFile profilePic,
                                      @RequestPart("certificate") MultipartFile certificate,
                                      @RequestPart("fullname") String fullname,
                                      @RequestPart("email") String email,
                                      @RequestPart("language") String language,
                                      @RequestPart("proficiencyLevel") String proficiencyLevel,
                                      @RequestPart("password") String password

                                    ) {
        try {
            // Check if profilePic and certificate are not null
            if (profilePic.isEmpty() || certificate.isEmpty()) {
                return new ResponseEntity<>("Profile picture and certificate are required", HttpStatus.BAD_REQUEST);
            }

            // Convert profile picture and certificate to byte arrays
            byte[] profilePicBytes = profilePic.getBytes();
            byte[] certificateBytes = certificate.getBytes();

            // Create a new TutorDto object with the received data
            TutorDto tutorDto = new TutorDto();
            tutorDto.setProfilePic(profilePicBytes);
            tutorDto.setCertificate(certificateBytes);
            tutorDto.setFullname(fullname);
            tutorDto.setEmail(email);
            tutorDto.setLanguage(language);
            tutorDto.setProficiencyLevel(proficiencyLevel);
            tutorDto.setPassword(password);



            // Save the new tutor and return the saved tutor object
            TutorDto savedTutor = tutorService.addTutor(tutorDto);
            return new ResponseEntity<>(savedTutor, HttpStatus.CREATED);
        } catch (IOException e) {
            e.printStackTrace();
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/details/{id}")
    public ResponseEntity<TutorDto> getTutor(@PathVariable long id){
        TutorDto savedTutor = tutorService.findByid(id);
        return new ResponseEntity<>(savedTutor, HttpStatus.OK);
    }

}
