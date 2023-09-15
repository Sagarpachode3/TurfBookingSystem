package com.app.service;

import com.app.dao.BookingRepository;
import com.app.pojos.Booking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.util.List;

@Service
@Transactional
public class BookingServiceImpl implements IBookingService {

	//BookingServiceImpl depends on BookingRepository
    @Autowired
    private BookingRepository bookingRepository;

    @Override
    public List<Booking> fetchAllBooking() {
        return bookingRepository.findAll();
    }

    @Override
    public List<Booking> getAllBookingByDate(LocalDate date) {
        return bookingRepository.getAllBookingByDate(date);
    }

    @Override
    public List<Booking> getAllBookingsOfUser(int userId) {
        return bookingRepository.getAllBookingsOfUser(userId);
    }

}
