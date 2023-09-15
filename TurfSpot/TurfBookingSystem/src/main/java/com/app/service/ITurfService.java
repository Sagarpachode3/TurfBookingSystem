package com.app.service;

import java.util.List;

import com.app.pojos.Turf;

public interface ITurfService {
	Turf findByTurfId(int turfId);
    Turf saveTurf(Turf turf);
    List<Turf> findAll();
    List<Turf> findTurfByManagerId(int managerId);
    String deleteTurfDetails(int turfId);
    Turf updateTurfDetails(Turf updateTurf);

}
