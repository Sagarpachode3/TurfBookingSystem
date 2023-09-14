package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.exc_handler.GlobalExceptionHandler;
import com.app.pojos.User;
import com.app.service.IUserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="http://localhost:3000")
public class UserController {
	
	//UserController depends on IUserService i/f
	@Autowired
	private IUserService userService;
	
	public UserController() {
		System.out.println("==>In constructor of : "+getClass());
	}
	
	//REST API end point for user registration
	@PostMapping("/register")
	public ResponseEntity<?>registerUser(@RequestBody User user) throws Exception {
		System.out.println("==>Inside registerUser() : "+user+" of : "+getClass());
		return new ResponseEntity<>(userService.regUser(user), HttpStatus.CREATED);
	}
	
	//REST API end point to authenticate the user
	@PostMapping("/authenticate")
	public ResponseEntity<?> loginUser(@RequestBody User user) throws Exception {
		System.out.println("==>Inside loginUser() : "+user+" of : "+getClass());
		String email = user.getEmailId();
		String pass = user.getPassword();
		User userObj=null;
		if(email !=null && pass != null) 
			userObj = userService.fetchUserByEmailIdAndPassword(email,pass);
		if(userObj == null)
			return GlobalExceptionHandler.handleRuntimeException(new RuntimeException("User does not exist!"));
		return ResponseEntity.ok(userObj);
	}
	
	//REST API end point to serve the list of users
	@GetMapping
	public List<User>getAllUsers(){
		System.out.println("==>Inside getAllUsers() of : "+getClass());
		return userService.fetchAllUsers();
	}
	
	//REST API end point to get the user details by Id
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserDetails(@PathVariable int userId){
		System.out.println("==>Inside getUserDetails() : "+userId+" of : "+getClass());
		return ResponseEntity.ok(userService.getUserDetails(userId));
	}
	
	//REST API end point for updating user details
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User detachedUser, @PathVariable int id){
		System.out.println("==>Inside updateUserDetails() : "+detachedUser+ ", "+id+" of : "+getClass());
		//User existUser=userService.getUserDetails(id); //if not then throw exception
		return ResponseEntity.ok(userService.updateUserDetails(detachedUser));	
	}
	
	//REST API end point to reset user password 
//	@PutMapping("/resetpassword")
//	public ResponseEntity<?> resetPassword(@RequestBody ResetPasswordDTO dto){
//		System.out.println("==>Inside resetPassword() of : "+getClass());
//		return ResponseEntity.ok(userService.updateUserPassword(dto.getEmail(), dto.getPassword()));
//	}
	
	//REST API end point to reset user password
	@PutMapping("/resetpassword")
	public ResponseEntity<?> resetPassword(@RequestParam String email,@RequestParam String password){
		System.out.println("==>Inside resetPassword() of : "+getClass());
		return ResponseEntity.ok(userService.updateUserPassword(email,password));
	}
	
}

