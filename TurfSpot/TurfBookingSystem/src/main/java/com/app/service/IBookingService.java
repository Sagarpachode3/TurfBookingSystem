package com.app.service;

import com.app.pojos.Booking;

import java.time.LocalDate;
import java.util.List;

public interface IBookingService {
    
	List<Booking> fetchAllBooking();
    List<Booking> getAllBookingByDate(LocalDate date);
    List<Booking> getAllBookingsOfUser(int userId);

}
