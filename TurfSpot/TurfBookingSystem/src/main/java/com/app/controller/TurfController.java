package com.app.controller;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.BookingRepository;
import com.app.dao.PaymentRepository;
import com.app.dao.SlotRepository;
import com.app.pojos.Booking;
import com.app.pojos.Payment;
import com.app.pojos.Slot;
import com.app.pojos.Turf;
import com.app.service.ITurfService;

@RestController
@RequestMapping("/turf")
@CrossOrigin(origins = "http://localhost:3000")
public class TurfController {
	
	//TurfController depends on ITurfService and Slot, Booking, Payment repositories
	@Autowired
	private ITurfService turfService;  
	@Autowired
	private SlotRepository slotRepository;
	@Autowired
	private BookingRepository bookingRepository;
	@Autowired 
	private PaymentRepository paymentRepository;

	public TurfController() {
		System.out.println("==>In constructor of : "+getClass());
	}
	
	//REST API end point to add turf
	@PostMapping("/create")
    public Turf createTurf(@RequestBody Turf turf) {
		System.out.println("==>Inside createTurf() of : "+getClass());
        turf.setAvailable(true);
        return turfService.saveTurf(turf);
    }

	//REST API end point to get the list of all available turf
	@GetMapping("/availableturfs")
	public List<Turf> getAllAvailableTurfs() {
		System.out.println("==>Inside getAllAvailableTurfs() of : "+getClass());
		List<Turf> turf = turfService.findAll();
		List<Turf> availableTurfs = turf.stream()
				.filter(x -> x.getAvailable().equals(true))
				.collect(Collectors.toList());
		return availableTurfs;
	}

	//REST API end point to fetch turf by id
	@GetMapping("/fetchByTurfId/{turfId}")
	public Turf getTurfById(@PathVariable(value = "turfId") int turfId) throws Exception {
		System.out.println("==>Inside getTurfById() of : "+getClass());
		Turf turf = turfService.findByTurfId(turfId);
		if (turf == null)
			throw new Exception("Turf Not Found for Turf Id : " + turfId);
		return turf;
	}

	//REST API end point to list of turf under particular manager
	@GetMapping("/fetchByManagerId/{managerId}")
	public List<Turf> getTurfByManagerId(@PathVariable(value = "managerId") int managerId) throws Exception {
		System.out.println("==>Inside getTurfByManagerId() of : "+getClass());
		List<Turf> turfs = turfService.findTurfByManagerId(managerId);
		if (turfs == null || turfs.isEmpty())
			throw new Exception("Turf Not Found for Manager Id : " + managerId);
		return turfs;
	}

	//REST API end point to serve the list of turf
	@GetMapping("/turflist")
	public List<Turf> findAll() {
		System.out.println("==>Inside findAll() of : "+getClass());
		return turfService.findAll();
	}

	//REST API end point to update the turf details
	@PutMapping("/update/{id}")
	public ResponseEntity<?> updateTurfDetails(@RequestBody Turf updateTurf, @PathVariable int id) {
		System.out.println("==>Inside updateTurfDetails() of : "+getClass());
		if (updateTurf.getAvailable() == null) {
			Turf turf = turfService.findByTurfId(updateTurf.getTurfId());
			updateTurf.setAvailable(turf.getAvailable());
		}
		return ResponseEntity.ok(turfService.updateTurfDetails(updateTurf));
	}

	//REST API end point to fetch all slots
	@GetMapping("/slots")
	public List<Slot> findSlots() {
		System.out.println("==>Inside findSlots() of : "+getClass());
		return slotRepository.findAll();
	}

	//REST API end point to book the turf
	@PostMapping("/bookTurf")
	public Booking bookTurf(@RequestBody Booking booking) throws Exception {
		System.out.println("==>Inside bookTurf() of : "+getClass());
		Integer paymentId = booking.getPaymentId();
		Optional<Payment> payment = paymentRepository.findById(paymentId);
		if (!payment.isPresent())
			throw new Exception("Payment Not found for Payment Id : " + paymentId);
			//return GlobalExceptionHandler.handleRuntimeException(new RuntimeException("Payment Not found for Payment Id : "+paymentId));
		List<Slot> availableSlots = getAvailableSlotsForTurf(booking.getTurfId(), booking.getDate());
		List<Integer> availableSlotIds = availableSlots.stream()
				.map(x -> x.getSlotId())
				.collect(Collectors.toList());
		if (availableSlotIds.contains(booking.getSlotId())) {
			bookingRepository.save(booking);
		} else {
			throw new Exception("Slot is not available!");
		}
		return bookingRepository.save(booking);
	}

	//REST API end point to get available slots for particular turf
	@GetMapping("/availableSlotsForTurf/{turfId}/{localDate}")
	public List<Slot> getAvailableSlotsForTurf(@PathVariable(value = "turfId") int turfId,
			@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable(value = "localDate") LocalDate date)
			throws Exception {
		System.out.println("==>Inside getAvailableSlotsForTurf() of : "+getClass());
		if (date.isBefore(LocalDate.now())) {
			throw new Exception("Slot not available for previous days!");
		}
		List<Booking> bookings = bookingRepository.findByTurfIdAndDate(turfId, date);
		List<Integer> slots = findSlots().stream()
				.map(x -> x.getSlotId())
				.collect(Collectors.toList());
		List<Integer> bookedSLots = bookings.stream()
				.map(x -> x.getSlotId())
				.collect(Collectors.toList());
		slots.removeAll((bookedSLots));
		return slotRepository.findSlotBySlotIdList(slots);
	}

	//REST API end point to get all bookings by TurfId
	@GetMapping("/bookings/{turfId}/{localDate}")
	public List<Booking> getAllBookingsByTurfId(@PathVariable(value = "turfId") int turfId,
			@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable(value = "localDate") LocalDate date)
			throws Exception {
		System.out.println("==>Inside getAllBookingsByTurfId() of : "+getClass());
		List<Booking> bookings = bookingRepository.findByTurfIdAndDate(turfId, date);
		return bookings;
	}

	//REST API end point to delete turf details
	@DeleteMapping("/{turfId}")
	public ResponseEntity<String> deleteTurfDetails(@PathVariable int turfId) {
		System.out.println("==>Inside deleteTurfDetails() of : "+getClass());
		return ResponseEntity.ok(turfService.deleteTurfDetails(turfId));
	}

	//REST API end point to make turf unavailable
	@DeleteMapping("/unavailable/{turfId}")
	public ResponseEntity<Turf> unavialableTurfDetails(@PathVariable int turfId) {
		System.out.println("==>Inside unavialableTurfDetails() of : "+getClass());
		Turf turf = turfService.findByTurfId(turfId);
		turf.setAvailable(false);
		return ResponseEntity.ok(turfService.updateTurfDetails(turf));
	}

}
