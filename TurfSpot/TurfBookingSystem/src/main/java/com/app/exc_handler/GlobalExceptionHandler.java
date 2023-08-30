package com.app.exc_handler;

import java.time.LocalDateTime;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.dto.ErrorResponse;

public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	
	@ExceptionHandler(RuntimeException.class)
	public static ResponseEntity<?> handleRuntimeException(RuntimeException e){
		System.out.println("==> In handleRuntimeException() : "+e);
		ErrorResponse resp = new ErrorResponse(e.getMessage(), LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}
	
	@ExceptionHandler(EmptyResultDataAccessException.class)
	public ResponseEntity<?> handleEmptyDataException(RuntimeException e){
		System.out.println("==> In handleEmptyDataException() : "+e);
		ErrorResponse resp=new ErrorResponse(e.getMessage(), LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
		
	}

}
