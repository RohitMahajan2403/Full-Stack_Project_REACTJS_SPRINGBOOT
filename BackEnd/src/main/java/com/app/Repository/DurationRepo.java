package com.app.Repository;

import com.app.Entity.Duration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DurationRepo extends JpaRepository<Duration,Long> {

    Duration findByMonths(int months);
}
