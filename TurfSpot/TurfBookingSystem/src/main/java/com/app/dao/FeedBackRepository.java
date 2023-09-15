package com.app.dao;

import com.app.pojos.FeedBack;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("feedbackRepository")
public interface FeedBackRepository extends JpaRepository<FeedBack,Integer> {

	
}
