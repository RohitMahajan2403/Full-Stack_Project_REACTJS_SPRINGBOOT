package com.app.Entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Duration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long durationID;
    private int months;

    @OneToMany(mappedBy = "duration")
    @JsonManagedReference
    private List<Course_Info> courses;

    public Duration(Long id, int months) {
    }
}
