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
@Table(name = "manager")
public class Manager {
    
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int managerId;
    @Column(length = 30, nullable = false)
    private String firstName;
    @Column(length = 30, nullable = false)
    private String lastName;
    @Column(length = 12, nullable = false)
    private long contactNo;
    @Column(length = 30, unique = true, nullable = false)
    private String emailId;
    @Column(length = 40, nullable = false)
    private String password;
    @Convert(converter=BooleanToStringConverter.class)
    private Boolean isActive;

    
    public Manager() {
		// TODO Auto-generated constructor stub
	}
    
    public Manager(String firstName, String lastName, long contactNo, String emailId, String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.contactNo = contactNo;
		this.emailId = emailId;
		this.password = password;
	}
    
    public int getManagerId() {
        return managerId;
    }

    public void setManagerId(int managerId) {
        this.managerId = managerId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getActive() {
        return isActive;
    }

    public void setActive(Boolean active) {
        this.isActive = active;
    }

	public long getContactNo() {
		return contactNo;
	}

	public void setContactNo(long contactNo) {
		this.contactNo = contactNo;
	}

	@Override
	public String toString() {
		return "Manager [managerId=" + managerId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", contactNo=" + contactNo + ", emailId=" + emailId + ", password=" + password + ", isActive="
				+ isActive + "]";
	}
	
}
