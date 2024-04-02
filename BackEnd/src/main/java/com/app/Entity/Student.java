package com.app.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name="full_name")
    private String fullname;
    @Column(name="email",unique = true)
    private String email;
    private int contact;
    private String role="student";
    private String password;


    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
    private List<Course> course = new ArrayList<>();

    public Student(long id, String fullname, String email, int contact, String password, String role) {
        this.id = id;
        this.fullname = fullname;
        this.email = email;
        this.contact = contact;
        this.password = password;
        this.role = role;
    }



}
