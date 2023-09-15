package com.app.dao;

import com.app.pojos.Slot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SlotRepository extends JpaRepository<Slot, Integer> {

    @Query(value = "SELECT s FROM Slot s WHERE s.slotId IN :slotIds")
    List<Slot> findSlotBySlotIdList(@Param("slotIds")List<Integer> slotIds);

}
