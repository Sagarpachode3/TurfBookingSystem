package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.customExc.PaymentHandlingException;
import com.app.dao.PaymentRepository;
import com.app.pojos.Payment;

@Service
@Transactional
public class PaymentServiceImpl implements IPaymentService {

	//PaymentServiceImpl depends on IPaymentService i/f
	@Autowired
	private PaymentRepository paymentRepo;

	@Override
	public List<Payment> fetchAllPayments() {
		return paymentRepo.findAll();
	}

	@Override
	public Payment saveUserPayment(Payment payment) {
		return paymentRepo.save(payment);
	}

	@Override
	public String deletePaymentDetails(int pId) {
		paymentRepo.deleteById(pId);
		return "Payment details has been deleted!";
	}

	@Override
	public Payment getPaymentDetails(int pId) {
		return paymentRepo.findById(pId).
				orElseThrow(() -> new PaymentHandlingException("Invalid payment Id!"));
	}

	@Override
	public Payment updatePaymentDetails(Payment pdetails) {
		return paymentRepo.save(pdetails);
	}

}
