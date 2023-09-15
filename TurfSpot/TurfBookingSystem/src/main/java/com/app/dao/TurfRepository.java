package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Turf;

public interface TurfRepository extends JpaRepository<Turf, Integer> {

	Turf findByTurfId(int id);
	List<Turf> findByTurfAddAndTurfType(String turfAdd, String turfType);
	List<Turf> findByManagerId(int managerId);
} 
