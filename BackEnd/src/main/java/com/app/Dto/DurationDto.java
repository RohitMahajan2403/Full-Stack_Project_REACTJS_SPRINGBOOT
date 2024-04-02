package com.app.Dto;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class DurationDto {

    private Long durationID;
    private int months;

    public DurationDto(String months){
        this.months= Integer.parseInt(months);

    }

}
