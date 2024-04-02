package com.app.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Tutors")
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tutorId;
    @Lob
    @Column(columnDefinition="MEDIUMBLOB")
    private byte[] profilePic;

    @Column(name = "Full_name")
    private String fullname;

    @Column(name = "Email",unique = true)
    private String email;

    private String language;


    private String proficiencyLevel;

    @Lob
    @Column(columnDefinition="MEDIUMBLOB")
    private byte[] certificate;

    private String password;





    private String role="tutor";

    @OneToMany(mappedBy = "tutor")
    @JsonManagedReference
    private List<Course_Info> courses;

    @OneToMany(mappedBy = "id", cascade = CascadeType.ALL)
    private List<Course> course = new ArrayList<>();


    public Tutor(long tutorId, byte[] profilePic, String fullname, String email, String language, String proficiencyLevel, byte[] certificate, String password, String role) {
        this.tutorId = tutorId;
        this.profilePic = profilePic;
        this.fullname = fullname;
        this.email = email;
        this.language = language;
        this.proficiencyLevel = proficiencyLevel;
        this.certificate = certificate;
        this.password = password;
        this.role = role;

    }
}
