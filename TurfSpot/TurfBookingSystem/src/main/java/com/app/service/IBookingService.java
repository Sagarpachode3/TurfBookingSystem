package com.app.service;

import java.time.LocalDate;
import java.util.List;

import com.app.pojos.Booking;

public interface IBookingService {

	List<Booking> fetchAllBooking();
    List<Booking> getAllBookingByDate(LocalDate date);
    List<Booking> getAllBookingsOfUser(int userId);
}
