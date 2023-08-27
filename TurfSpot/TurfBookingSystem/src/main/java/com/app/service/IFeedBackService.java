package com.app.service;

import java.util.List;

import com.app.pojo.FeedBack;

public interface IFeedBackService {
	List<FeedBack> fetchAllfeedback();
    FeedBack saveFeedback(FeedBack feedback);

}
