package com.app.Service;



import com.app.Dto.BookingDto;
import java.util.List;

public interface BookingService {
    BookingDto createBooking(BookingDto bookingDto);
    BookingDto getBookingById(Long id);
    List<BookingDto> getAllBookings();
    void deleteBooking(Long id);
}
