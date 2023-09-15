package com.app.service;

import com.app.pojos.Turf;

import java.util.List;

<<<<<<< HEAD
import com.app.pojos.Turf;

=======
>>>>>>> a7d915216a36db9a885be195b08a21c15cc5a834
public interface ITurfService {
    
	Turf findByTurfId(int turfId);
    Turf saveTurf(Turf turf);
    List<Turf> findAll();
    List<Turf> findTurfByManagerId(int managerId);
    String deleteTurfDetails(int turfId);
    Turf updateTurfDetails(Turf updateTurf);
    	 
}
