package com.app.dao;

import com.app.pojos.Turf;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository("turfRepository")
public interface TurfRepository extends JpaRepository<Turf,Integer> {
    
	Turf findByTurfId(int id);
    List<Turf> findByTurfAddAndTurfType(String turfAdd, String turfType);
    List<Turf> findByManagerId(int managerId);

}
