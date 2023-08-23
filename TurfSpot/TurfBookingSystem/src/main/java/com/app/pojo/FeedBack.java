package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

@Entity
@Table(name = "Feed_back")
public class FeedBack {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer fbId;
	
	@Column(length =30,nullable = false)
	public String email;
	
	@Column(nullable = false)
	public String feedback;
	
	@CreationTimestamp
	private LocalDate date;

	public FeedBack() {
		
	}

	public FeedBack(String email, String feedback, LocalDate date) {
		super();
		this.email = email;
		this.feedback = feedback;
		this.date = date;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFeedback() {
		return feedback;
	}

	public void setFeedback(String feedback) {
		this.feedback = feedback;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "FeedBack [fbId=" + fbId + ", email=" + email + ", feedback=" + feedback + ", date=" + date + "]";
	}
	
	
	
	
	
	

}
