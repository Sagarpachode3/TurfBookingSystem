package com.app.service;


import com.app.dao.FeedBackRepository;
import com.app.pojos.FeedBack;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class FeedBackServiceImpl implements IFeedBackService  {
    
	//FeedBackServiceImpl depends on FeedBackRepository
	@Autowired
    private FeedBackRepository feedBackRepository;

    @Override
    public List<FeedBack> fetchAllfeedback() {
        return feedBackRepository.findAll();
    }

    @Override
    public FeedBack saveFeedback(FeedBack feedback) {
        return feedBackRepository.save(feedback);
    }

}
