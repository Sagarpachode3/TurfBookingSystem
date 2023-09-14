package com.app.controller;

import com.app.pojos.FeedBack;
import com.app.service.IFeedBackService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins="http://localhost:3000")
public class FeedBackController {
    
	//FeedBackController depends on IFeedBackService i/f
	@Autowired
    private IFeedBackService fservice;

	public FeedBackController() {
		System.out.println("==>In constructor of : "+getClass());
	}
	
	//REST API end point to save feedback
    @PostMapping("/create")
    public FeedBack saveFeedback(@RequestBody FeedBack feedback) {
    	System.out.println("==>Inside saveFeedback() : "+feedback+" of : "+getClass());
        return fservice.saveFeedback(feedback);
    }

    //REST API end point to get all feedback
    @GetMapping
    public List<FeedBack> getAllFeedbacks(){
        System.out.println("==>Inside getAllFeedbacks() of : "+getClass());
        return fservice.fetchAllfeedback();
    }
    
}
