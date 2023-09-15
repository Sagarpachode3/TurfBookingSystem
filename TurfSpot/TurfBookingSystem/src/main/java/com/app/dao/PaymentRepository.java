package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Payment;

@Repository("paymentRepository")
public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
