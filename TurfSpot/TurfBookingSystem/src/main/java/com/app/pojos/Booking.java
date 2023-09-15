package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
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
    private int bookingId;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate date;
    private int turfId;
    private int slotId;
    private int userId;
    private Integer paymentId;
    
    
    public Booking() {
		// TODO Auto-generated constructor stub
	}
    
    public Booking(int bookingId, LocalDate date, int turfId, int slotId, int userId, Integer paymentId) {
        super();
    	this.bookingId = bookingId;
        this.date = date;
        this.turfId = turfId;
        this.slotId = slotId;
        this.userId = userId;
        this.paymentId = paymentId;
    }
    
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "turfId",insertable = false, updatable = false)
    public Turf turf;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "paymentId",insertable = false, updatable = false)
    public Payment payment;
    
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "slotId",insertable = false, updatable = false)
    public Slot slot;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "userId",insertable = false, updatable = false)
    public User user;
    
    public Turf getTurf() {
		return turf;
	}
	public void setTurf(Turf turf) {
		this.turf = turf;
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
	
	public Payment getPayment() {
		return payment;
	}
	public void setPayment(Payment payment) {
		this.payment = payment;
	}	

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
    public  Integer getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(Integer paymentId) {
        this.paymentId = paymentId;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
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

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", date=" + date + ", turfId=" + turfId + ", slotId=" + slotId
				+ ", userId=" + userId + ", paymentId=" + paymentId + "]";
	}

}

