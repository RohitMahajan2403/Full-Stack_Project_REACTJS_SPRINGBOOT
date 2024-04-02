package com.app.Service;

import com.app.Dto.FeedBackDTO;
import com.app.Entity.Feedback;

import java.util.List;

public interface FeedbackService {
    Feedback saveFeedback(FeedBackDTO feedbackDTO);
    List<Feedback> getAllFeedback();
}
