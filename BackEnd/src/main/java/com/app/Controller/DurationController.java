package com.app.Controller;

import com.app.Entity.Duration;
import com.app.Service.DurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/durations")
public class DurationController {


        private final DurationService durationService;

        @Autowired
    public DurationController(DurationService durationService) {
        this.durationService = durationService;
    }


    @GetMapping
        public List<Duration> getAllDurations() {
            return durationService.getAllDurations();
        }

        // Add more endpoints as needed
    }

