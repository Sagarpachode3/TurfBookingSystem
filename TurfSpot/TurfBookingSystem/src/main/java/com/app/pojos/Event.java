package com.app.pojos;

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
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "event")
public class Event {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int eventId;

	@Column(nullable = false)
	private String eventName;

	private String description;

	@Column(name = "manager_id", nullable = false)
	private int managerId;

	@Column(name = "turf_id", nullable = false)
	private int turfId;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	@Column(nullable = false)
	private LocalDate date;

	@Column(nullable = false)
	private LocalTime time;

	public Event() {

	}

	public Event(int eventId, String eventName, String description, int managerId, int turfId, LocalDate date,
			LocalTime time) {
		super();
		this.eventId = eventId;
		this.eventName = eventName;
		this.description = description;
		this.managerId = managerId;
		this.turfId = turfId;
		this.date = date;
		this.time = time;
	}
	@ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.EAGER) // Choose the appropriate cascade type
	@JoinColumn(name = "manager_id",insertable = false,updatable = false)
	public Manager manager;


	public int getEventId() {
		return eventId;
	}

	public void setEventId(int eventId) {
		this.eventId = eventId;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public int getTurfId() {
		return turfId;
	}

	public void setTurfId(int turfId) {
		this.turfId = turfId;
	}

	public LocalDate getDate() {
		return date;
	}

	public void setDate(LocalDate date) {
		this.date = date;
	}

	public LocalTime getTime() {
		return time;
	}

	public void setTime(LocalTime time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Event [eventId=" + eventId + ", eventName=" + eventName + ", description=" + description
				+ ", managerId=" + managerId + ", turfId=" + turfId + ", date=" + date + ", time=" + time + "]";
	}

}
