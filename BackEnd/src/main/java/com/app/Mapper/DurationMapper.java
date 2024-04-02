package com.app.Mapper;

import com.app.Dto.DurationDto;
import com.app.Entity.Duration;

public class DurationMapper {

    public Duration mapToEntity(DurationDto dto) {
        Duration duration = new Duration();
        duration.setDurationID(dto.getDurationID());
        duration.setMonths(dto.getMonths());
        return duration;
    }
}
