package com.app.dao;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {

    List<Booking> findByTurfIdAndDate(int turfId, LocalDate date);
    List<Booking> getAllBookingByDate(LocalDate date);
    @Query(value = "SELECT u FROM Booking u WHERE u.userId = :userId")
    List<Booking> getAllBookingsOfUser(@Param("userId") int userId);

}
