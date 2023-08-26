package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.pojos.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService {

	//UserServiceImpl depends on UserRepository i/f
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public User regUser(User transientUser) {
		return userRepo.save(transientUser);
	}

	@Override
	public List<User> fetchAllUsers() {
		return userRepo.findAll();
	}

	@Override
	public User fetchUserByEmailIdAndPassword(String email, String password) {
		return userRepo.findUserByEmailIdAndPassword(email, password);
	}

	@Override
	public User getUserDetails(int userId) {
		return userRepo.findById(userId).get();
	}

	@Override
	public String deleteUserDetails(int userId) {
		userRepo.deleteById(userId);	
		//throws IllegalArgumentException in case the given id is null
		return "User having id="+userId+" has been removed!";
	}

	@Override
	public User updateUserDetails(User detachedUser) {
		return userRepo.save(detachedUser);
	}

	@Override
	public String updateUserPassword(String email, String pass) {
		User temp = userRepo.findByEmailId(email);
		temp.setPassword(pass);
		return "Password has been changed!";
	}

}
