package com.app.Entity;

import com.app.Dto.TutorDto;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Course_Info {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Coursename;
    private String level;
    private String CoursePrice;

    @ManyToOne
    @JoinColumn(name = "tutor_id")
    @JsonBackReference
    private Tutor tutor;

    @ManyToOne
    @JoinColumn(name = "language_id")
    @JsonBackReference
    private Language language;

    @ManyToOne
    @JoinColumn(name = "duration_id")
    @JsonBackReference
    private Duration duration;



}
