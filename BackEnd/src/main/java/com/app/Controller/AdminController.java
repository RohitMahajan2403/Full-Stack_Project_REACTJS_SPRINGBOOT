package com.app.Controller;



import com.app.Entity.Feedback;
import com.app.Entity.Language;
import com.app.Entity.Student;
import com.app.Entity.Tutor;
import com.app.Repository.FeedbackRepo;
import com.app.Repository.LanguageRepo;
import com.app.Repository.StudentRepo;
import com.app.Repository.TutorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins ="http://localhost:3000")
@RequestMapping("/adminhome")
public class AdminController {

    private final StudentRepo studentRepository;

    private final TutorRepo tutorRepository;


    private final LanguageRepo languageRepository;

    private final FeedbackRepo feedbackRepository;

    @Autowired
    public AdminController(StudentRepo studentRepository, TutorRepo tutorRepository, LanguageRepo languageRepository, FeedbackRepo feedbackRepository) {
        this.studentRepository = studentRepository;
        this.tutorRepository = tutorRepository;
        this.languageRepository = languageRepository;
        this.feedbackRepository = feedbackRepository;
    }

    @GetMapping("/students")
    public List<Student> getAllStudents() {

        return studentRepository.findAll();
    }

    @GetMapping("/tutors")
    public List<Tutor> getAllTutors() {

        return tutorRepository.findAll();
    }

    @GetMapping("/language")
    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }

    @GetMapping("/feedback")
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }
}

