package com.app.Service.Implement;


import com.app.Dto.BookingDto;
import com.app.Entity.Booking;
import com.app.Mapper.BookingMapper;
import com.app.Repository.BookingRepo;

import com.app.Service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingServiceImpl implements BookingService {

    private final BookingRepo bookingRepository;

    public BookingServiceImpl(BookingRepo bookingRepository) {
        this.bookingRepository = bookingRepository;
    }


    @Override
    public BookingDto createBooking(BookingDto bookingDto) {
        Booking booking = BookingMapper.toEntity(bookingDto);
        return BookingMapper.toDto(bookingRepository.save(booking));
    }

    @Override
    public BookingDto getBookingById(Long id) {
        Optional<Booking> booking = bookingRepository.findById(id);
        return booking.map(BookingMapper::toDto).orElse(null);
    }

    @Override
    public List<BookingDto> getAllBookings() {
        return bookingRepository.findAll()
                .stream()
                .map(BookingMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}

