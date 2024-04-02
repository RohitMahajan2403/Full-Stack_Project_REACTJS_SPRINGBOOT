package com.app.Mapper;


import com.app.Dto.FeedBackDTO;
import com.app.Entity.Feedback;
import org.springframework.stereotype.Component;

@Component
public class FeedbackMapper {

    public Feedback mapToEntity(FeedBackDTO feedbackDTO) {
        Feedback feedback = new Feedback();
        feedback.setName(feedbackDTO.getName());
        feedback.setEmail(feedbackDTO.getEmail());
        feedback.setMessage(feedbackDTO.getMessage());
        feedback.setRating(feedbackDTO.getRating());
        return feedback;
    }
}
