package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Convert;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.app.Converter.BooleanToStringConverter;

@Entity
@Table(name = "turf")
public class Turf {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int turfId;
	@Column(length = 20, nullable = false)
	private String turfName;
	@Column(length = 50, nullable = false)
	private String turfAdd;
	@Column(length = 30, nullable = false)
	private String turfType;
	@Column(name = "manager_id")
	private int managerId;
	@Column(nullable = false)
	private double turfAmount;
	@Convert(converter = BooleanToStringConverter.class)
	private Boolean isAvailable;


	public Turf() {
		// TODO Auto-generated constructor stub
	}
	
	public Turf(int turfId, String turfName, String turfAdd, String turfType, int managerId, double turfAmount, Boolean isAvailable) {
		super();
		this.turfId = turfId;
		this.turfName = turfName;
		this.turfAdd = turfAdd;
		this.turfType = turfType;
		this.managerId = managerId;
		this.turfAmount = turfAmount;
		this.isAvailable = isAvailable;
	}

	
	public Boolean getAvailable() {
		return isAvailable;
	}

	public void setAvailable(Boolean available) {
		isAvailable = available;
	}

	public int getTurfId() {
		return turfId;
	}

	public void setTurfId(int turfId) {
		this.turfId = turfId;
	}

	public String getTurfName() {
		return turfName;
	}

	public void setTurfName(String turfName) {
		this.turfName = turfName;
	}

	public String getTurfAdd() {
		return turfAdd;
	}

	public void setTurfAdd(String turfAdd) {
		this.turfAdd = turfAdd;
	}

	public String getTurfType() {
		return turfType;
	}

	public void setTurfType(String turfType) {
		this.turfType = turfType;
	}

	public int getManagerId() {
		return managerId;
	}

	public void setManagerId(int managerId) {
		this.managerId = managerId;
	}

	public double getTurfAmount() {
		return turfAmount;
	}

	public void setTurfAmount(double turfAmount) {
		this.turfAmount = turfAmount;
	}

	@Override
	public String toString() {
		return "Turf [turfId=" + turfId + ", turfName=" + turfName + ", turfAdd=" + turfAdd + ", turfType=" + turfType
				+ ", managerId=" + managerId + ", turfAmount=" + turfAmount + ", isAvailable=" + isAvailable + "]";
	}
	
}
