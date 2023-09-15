package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "payment")
public class Payment extends BaseEntity {
	
	@CreationTimestamp
	private LocalDate paymentDate;
	@Column(nullable = false)
	private double paymentAmount;
	

	public Payment() {
		// TODO Auto-generated constructor stub
	}
	
	public Payment(LocalDate paymentDate, double paymentAmount) {
		super();
		this.paymentDate = paymentDate;
		this.paymentAmount = paymentAmount;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}
    
	public double getPaymentAmount() {
		return paymentAmount;
	}

	public void setPaymentAmount(double paymentAmount) {
		this.paymentAmount = paymentAmount;
	}
	
	@Override
	public String toString() {
		return "Payment [paymentDate=" + paymentDate + ", paymentAmount=" + paymentAmount + "]";
	}
	
}
