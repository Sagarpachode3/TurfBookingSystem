package com.app.pojo;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookngId;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;

	private int turfId;
	private int slotId;
	private int userId;
	private Integer paymentId;

	@Column(name = "start_time")
	private LocalTime startTime;

	@Column(name = "end_time")
	private LocalTime endTime;

	public Booking() {
		
	}

	public Booking(int bookngId, LocalDate date, int turfId, int slotId, int userId, Integer paymentId,
			LocalTime startTime, LocalTime endTime) {
		super();
		this.bookngId = bookngId;
		this.date = date;
		this.turfId = turfId;
		this.slotId = slotId;
		this.userId = userId;
		this.paymentId = paymentId;
		this.startTime = startTime;
		this.endTime = endTime;
	}
	
	@OneToOne(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="turfId",insertable = false, updatable = false)
	public Turf turf;
	
	@OneToOne(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="paymentId",insertable = false,updatable = false)
	public Payment payment;
	
	@OneToOne(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="slotId",insertable = false,updatable = false)
	public Slot slot;
	
	
	@OneToOne(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
	@JoinColumn(name="userId",insertable = false,updatable = false)
	public User user;
	

	public Turf getTurf() {
		return turf;
	}

	public void setTurf(Turf turf) {
		this.turf = turf;
	}

	public Payment getPayment() {
		return payment;
	}

	public void setPayment(Payment payment) {
		this.payment = payment;
	}

	public Slot getSlot() {
		return slot;
	}

	public void setSlot(Slot slot) {
		this.slot = slot;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public int getBookngId() {
		return bookngId;
	}

	public void setBookngId(int bookngId) {
		this.bookngId = bookngId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public int getTurfId() {
		return turfId;
	}

	public void setTurfId(int turfId) {
		this.turfId = turfId;
	}

	public int getSlotId() {
		return slotId;
	}

	public void setSlotId(int slotId) {
		this.slotId = slotId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public Integer getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(Integer paymentId) {
		this.paymentId = paymentId;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	@Override
	public String toString() {
		return "Booking [bookngId=" + bookngId + ", date=" + date + ", turfId=" + turfId + ", slotId=" + slotId
				+ ", userId=" + userId + ", paymentId=" + paymentId + ", startTime=" + startTime + ", endTime="
				+ endTime + "]";
	}
	
	
	
	

}
