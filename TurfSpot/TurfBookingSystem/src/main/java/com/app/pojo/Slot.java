package com.app.pojo;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "slot")
public class Slot {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int slotId;

	@Column(length = 20, nullable = false)
	private String description;

	@Column(name = "turf_id", nullable = false)
	private int turfId;

	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate date;

	private LocalTime time;

	public Slot() {

	}

	public Slot(int slotId, String description, int turfId, LocalDate date, LocalTime time) {
		super();
		this.slotId = slotId;
		this.description = description;
		this.turfId = turfId;
		this.date = date;
		this.time = time;
	}

	public int getSlotId() {
		return slotId;
	}

	public void setSlotId(int slotId) {
		this.slotId = slotId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
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
		return "Slot [slotId=" + slotId + ", description=" + description + ", turfId=" + turfId + ", date=" + date
				+ ", time=" + time + "]";
	}

}
