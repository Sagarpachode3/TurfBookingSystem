package com.app.dto;

import java.time.LocalDateTime;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class ErrorResponse {
	
	private String message;
	private LocalDateTime timestamp;
	
	public ErrorResponse(String message, LocalDateTime timestamp) {
		super();
		this.message = message;
		this.timestamp = timestamp;
	}
	
}


//it is better to wrap String message inside class and return its instance
//	instead of returning only String from method
//	return ErrorResponse instance

