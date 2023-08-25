package com.app.service;

import com.app.dao.TurfRepository;
import com.app.pojos.Turf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service("turfService")
public class TurfServiceImpl implements ITurfService {

	//TurfServiceImpl depends on TurfRepository
    @Autowired
    private TurfRepository turfRepository;

    @Override
    public Turf saveTurf(Turf turf) {
        return turfRepository.save(turf);
    }

    @Override
    public Turf findByTurfId(int turfId) {
        return turfRepository.findById(turfId).get();
    }

    @Override
    public List<Turf> findAll() {
        return turfRepository.findAll();
    }

    @Override
    public List<Turf> findTurfByManagerId(int managerId) {
        return turfRepository.findByManagerId(managerId);
    }

    @Override
    public String deleteTurfDetails(int turfId) {
        turfRepository.deleteById(turfId);
        return "Turf has been removed successfully!";
    }

    @Override
    public Turf updateTurfDetails(Turf updateTurf) {
        return turfRepository.save(updateTurf);
    }

}

