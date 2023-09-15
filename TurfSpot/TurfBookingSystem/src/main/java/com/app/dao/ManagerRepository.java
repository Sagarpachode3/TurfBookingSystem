package com.app.dao;

import com.app.pojos.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository("managerRepository")
public interface ManagerRepository extends JpaRepository<Manager,Integer> {

    Manager findManagerByEmailIdAndPassword(String email, String password);
    
    @Query("SELECT m FROM Manager m WHERE m.emailId=:emailId")
    Manager getManagerByEmailId(String emailId);
    
}

