package com.app.Service.Implement;
import com.app.Dto.DurationDto;
import com.app.Entity.Duration;
import com.app.Repository.DurationRepo;
import com.app.Service.DurationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class DurationServiceImpl implements DurationService {

        private final DurationRepo durationRepository;

        @Autowired
         public DurationServiceImpl(DurationRepo durationRepository) {
                 this.durationRepository = durationRepository;
            }

    public List<Duration> getAllDurations() {
            return durationRepository.findAll();
        }
    @Override
    public Duration findByMonths(int months) {
        return durationRepository.findByMonths(months);
    }


    @Override
    public Duration save(DurationDto durationDto) {
        Duration duration = new Duration();

        return durationRepository.save(duration);
    }
}


