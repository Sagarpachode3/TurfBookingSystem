package com.app.service;

import java.util.List;

import com.app.pojos.Payment;

public interface IPaymentService {

	List<Payment> fetchAllPayments();	
	Payment saveUserPayment(Payment payment);
	String deletePaymentDetails(int pId);
	Payment getPaymentDetails(int pId);
	Payment updatePaymentDetails(Payment pdetails);
	
}
