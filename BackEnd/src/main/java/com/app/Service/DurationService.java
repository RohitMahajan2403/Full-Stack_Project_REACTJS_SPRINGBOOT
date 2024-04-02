package com.app.Service;

import com.app.Dto.DurationDto;
import com.app.Entity.Duration;

import java.util.List;

public interface DurationService {
    List<Duration> getAllDurations();
    Duration save(DurationDto durationDto);

    Duration findByMonths(int months);
}
