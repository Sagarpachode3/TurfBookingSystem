package com.app.service;

import com.app.pojos.Turf;

import java.util.List;

public interface ITurfService {
    
	Turf findByTurfId(int turfId);
    Turf saveTurf(Turf turf);
    List<Turf> findAll();
    List<Turf> findTurfByManagerId(int managerId);
    String deleteTurfDetails(int turfId);
    Turf updateTurfDetails(Turf updateTurf);
    	 
}
