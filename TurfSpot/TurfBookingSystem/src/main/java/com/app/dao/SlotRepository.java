package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Slot;

public interface SlotRepository extends JpaRepository<Slot, Integer> {

	@Query(value = "SELECT s from Slot s WHERE s.slotId IN :slotIds")
	List<Slot> findSlotBySlotIdList(@Param("slotIds")List<Integer> slotIds);
}
