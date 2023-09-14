package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.pojos.Payment;
import com.app.service.IPaymentService;

@RestController
@RequestMapping("/payment")
@CrossOrigin(origins="http://localhost:3000")
public class PaymentController {

	//PaymentRestController depends on IPaymentService i/f
	@Autowired
	private IPaymentService paymentService;

	public PaymentController() {
		System.out.println("==>In constructor of : "+getClass());
	}

	//REST API end point to get all payment details
	@GetMapping()
	public List<Payment> getAllPaymentDetails() {
		System.out.println("==>Inside getAllPaymentDetails() of : "+getClass());
		return paymentService.fetchAllPayments();
	}
	
	//REST API end point to save payment info
	@PostMapping
	public ResponseEntity<?> savePayment(@RequestBody Payment payment) {
		System.out.println("==>Inside savePayment() : " + payment+" of : "+getClass());
		return new ResponseEntity<>(paymentService.saveUserPayment(payment), HttpStatus.CREATED);
	}

	//REST API end point for deleting payment details
	@DeleteMapping("/{pId}")
	public ResponseEntity<String> deletePaymentDetails(@PathVariable int pId) {
		System.out.println("==>Inside deletePaymentDetails() : "+pId+" of : "+getClass());
		return ResponseEntity.ok(paymentService.deletePaymentDetails(pId));
	}

	//REST API end point to get payment details by id
	@GetMapping("/{id}")
	public ResponseEntity<?> getPaymentDetails(@PathVariable int id) {
		System.out.println("==>Inside getPaymentDetails() : "+id+" of : "+getClass());
		return ResponseEntity.ok(paymentService.getPaymentDetails(id));
	}

	//REST API end point for updating payment details
	@PutMapping("/{pId}")
	public ResponseEntity<?> updatePaymentDetails(@RequestBody Payment p, @PathVariable int pId) {
		System.out.println("==>Inside updatePaymentDetails() : "+pId+" of : "+getClass());
		paymentService.getPaymentDetails(pId);
		return ResponseEntity.ok(paymentService.updatePaymentDetails(p));
	}
	
}
	

