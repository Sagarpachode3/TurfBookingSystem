package com.app.service;

import java.util.List;

import com.app.pojos.User;

public interface IUserService {
	User regUser(User transientUser);
	List<User> fetchAllUsers();
	User fetchUserByEmailIdAndPassword(String email,String password); //public
	User getUserDetails(int userId);
	String deleteUserDetails(int userId);
	User updateUserDetails(User detachedUser);
	String updateUserPassword(String email, String pass);

}
