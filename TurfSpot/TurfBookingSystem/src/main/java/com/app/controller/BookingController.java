package com.app.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.BookingRepository;
import com.app.dao.PaymentRepository;
import com.app.exc_handler.GlobalExceptionHandler;
import com.app.pojos.Booking;
import com.app.pojos.Payment;
import com.app.pojos.Slot;
import com.app.service.IBookingService;

@RestController
@RequestMapping("/booking")
@CrossOrigin(origins="http://localhost:3000")
public class BookingController {
    
	//BookingController depends on IBookingService, BookingRepository, PaymentRepository
	@Autowired
    private IBookingService bookingService;
    @Autowired
    TurfController tr;
    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
	private PaymentRepository paymentRepository;

    
    public BookingController() {
		System.out.println("==>In constructor of : "+getClass());
	}
    
    //REST API end point to view all bookings
    @GetMapping
    public List<Booking> getAllBookings() {
    	System.out.println("==>Inside getAllBookings() of : "+getClass());
        return  bookingService.fetchAllBooking();
    }
    
    //REST API end point to book the turf
    @PostMapping("/bookTurf")
	public ResponseEntity<?> bookTurf(@RequestBody Booking booking) throws Exception {
    	System.out.println("==>Inside bookTurf() of : "+getClass());
    	Integer paymentId = booking.getPaymentId();
		Optional<Payment> payment = paymentRepository.findById(paymentId);
		if (!payment.isPresent())
			return GlobalExceptionHandler.handleRuntimeException(new RuntimeException("Payment Not found for Payment Id : "+paymentId));
		List<Slot> availableSlots = tr.getAvailableSlotsForTurf(booking.getTurfId(), booking.getDate());
		List<Integer> availableSlotIds = availableSlots.stream()
				.map(x -> x.getSlotId())
				.collect(Collectors.toList());
		if (availableSlotIds.contains(booking.getSlotId())) {
			bookingRepository.save(booking);
		} else {
			return GlobalExceptionHandler.handleRuntimeException(new RuntimeException("Slot is not available!"));
		}
		return ResponseEntity.ok(bookingRepository.save(booking));
	}
    
    //REST API end point to view all bookings by date
    @GetMapping("/date/{date}")
    public List<Booking> getAllBookingsByDate(@DateTimeFormat(pattern = "yyyy-MM-dd")@PathVariable(value="date") LocalDate date) {
    	System.out.println("==>Inside getAllBookingsByDate() of : "+getClass());
        return bookingService.getAllBookingByDate(date);
    }
    
    //REST API end point to get all the bookings of particular user
    @GetMapping("/user/{userId}")
    public List<Booking> getAllBookingsByUserId(@PathVariable(value="userId") int userId) {
    	System.out.println("==>Inside getAllBookingsByUserId() of : "+getClass());
        return bookingService.getAllBookingsOfUser(userId);
    }
        
}
