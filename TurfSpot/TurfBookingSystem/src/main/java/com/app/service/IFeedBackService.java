package com.app.service;

import com.app.pojos.FeedBack;

import java.util.List;

public interface IFeedBackService {
    
	List<FeedBack> fetchAllfeedback();
    FeedBack saveFeedback(FeedBack feedback);

}
