package com.app.Service.Implement;

import com.app.Dto.FeedBackDTO;
import com.app.Entity.Feedback;
import com.app.Mapper.FeedbackMapper;
import com.app.Repository.FeedbackRepo;
import com.app.Service.FeedbackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FeedbackImpl implements FeedbackService {

    private final FeedbackRepo feedbackRepository;
    private final FeedbackMapper feedbackMapper;

    @Autowired
    public FeedbackImpl(FeedbackRepo feedbackRepository, FeedbackMapper feedbackMapper) {
        this.feedbackRepository = feedbackRepository;
        this.feedbackMapper = feedbackMapper;
    }
    @Override
    public Feedback saveFeedback(FeedBackDTO feedbackDTO) {
        Feedback feedback = feedbackMapper.mapToEntity(feedbackDTO);
        return feedbackRepository.save(feedback);
    }


    @Override
    public List<Feedback> getAllFeedback() {
        return feedbackRepository.findAll();
    }
}
