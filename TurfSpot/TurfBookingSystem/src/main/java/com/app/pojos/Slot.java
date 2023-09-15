package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name = "slot")
public class Slot {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int slotId;
    @Column(length = 20, nullable = false)
    private String description;

    
    public Slot() {
		// TODO Auto-generated constructor stub
	}

    public Slot(int slotId, String description) {
		super();
		this.slotId = slotId;
		this.description = description;
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
	
    @Override
	public String toString() {
		return "Slot [slotId=" + slotId + ", description=" + description + "]";
	}
    
}
