package com.app.Mapper;

import com.app.Dto.BookingDto;
import com.app.Entity.Booking;

public class BookingMapper {

    public static BookingDto toDto(Booking booking) {
        BookingDto bookingDto = new BookingDto();
        bookingDto.setId(booking.getId());
        if (booking.getStudent() != null) {
            bookingDto.setStudentId(booking.getStudent().getId());
        }
        if (booking.getCourse() != null) {
            bookingDto.setCourseId(booking.getCourse().getId());
        }
        bookingDto.setBookingDate(booking.getBookingDate());
        return bookingDto;
    }


    public static Booking toEntity(BookingDto bookingDto) {
        return new Booking(
                bookingDto.getId(),
                bookingDto.getStudentId(),
                bookingDto.getCourseId(),
                bookingDto.getBookingDate()
        );
    }
}
