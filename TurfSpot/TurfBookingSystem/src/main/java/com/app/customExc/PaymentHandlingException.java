package com.app.customExc;

@SuppressWarnings("serial")
public class PaymentHandlingException extends RuntimeException {

	public PaymentHandlingException(String msg) {
		super(msg);
	}
}
