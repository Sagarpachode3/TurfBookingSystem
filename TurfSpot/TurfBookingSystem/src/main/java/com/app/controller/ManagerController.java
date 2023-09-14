package com.app.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.exc_handler.GlobalExceptionHandler;
import com.app.pojos.Manager;
import com.app.pojos.User;
import com.app.service.IManagerService;
import com.app.service.IUserService;

@RestController
@RequestMapping("managers")
@CrossOrigin(origins="http://localhost:3000")
public class ManagerController {
	
	//ManagerController depends on IManagerService and UserServiceImpl i/f
	@Autowired
    private IManagerService managerService;
    @Autowired
    private IUserService userService;
    
    public ManagerController() {
		System.out.println("==>In constructor of : "+getClass());
	}
    
    //REST API end point for manager registration
    @PostMapping("/register")
    public ResponseEntity<?> registerManager(@RequestBody Manager manager) {
        System.out.println("==>Inside registerManager() : "+manager+" of : "+getClass());
        return new ResponseEntity<>(managerService.regManager(manager), HttpStatus.CREATED);
    }
    
    //REST API end point to authenticate the manager
  	@PostMapping("/authenticate")
  	public ResponseEntity<?> loginManager(@RequestBody Manager manager) throws Exception {
  		System.out.println("==>Inside loginManager() : "+manager+" of : "+getClass());
  		String email = manager.getEmailId();
  		String pass = manager.getPassword();
  		Manager managerObj=null;
  		if(email !=null && pass != null) 
  			managerObj = managerService.fetchManagerByEmailIdAndPassword(email,pass);
  		if(managerObj == null)
  			return GlobalExceptionHandler.handleRuntimeException(new RuntimeException("Manager does not exist!"));
  		return ResponseEntity.ok(managerObj);
  	}
    
    //REST API end point to serve the list of managers
    @GetMapping
    public List<Manager> getAllMgrs(){
        System.out.println("==>Inside getAllMgrs() of : "+getClass());
        return managerService.fetchAllManagers();
    }
    
    //REST API end point to get the manager details by Id
    @GetMapping("/{managerId}")
  	public ResponseEntity<?> getMgrDetails(@PathVariable int managerId){
  		System.out.println("==>Inside getMgrDetails() : "+managerId+" of : "+getClass());
  		return ResponseEntity.ok(managerService.getMgrDetails(managerId));
  	}
    
    //REST API end point to delete the manager details
  	@DeleteMapping("/{mId}")
  	public ResponseEntity<String> deleteMgrDetails(@PathVariable int mId){
  		System.out.println("==>Inside deleteMgrDetails() of : "+getClass());
  		return ResponseEntity.ok(managerService.deleteMgrDetails(mId));
  	}
    
    //REST API end point to get only the active managers among all the managers
    @GetMapping("/activeManagers")
    public List<Manager> getAllActiveManagers(){
        System.out.println("==>Inside getAllActiveManagers() of : "+getClass());
        List<Manager> managers = managerService.fetchAllManagers();
        List<Manager> activeManagers = managers.stream()
        		.filter(x -> x.getActive().equals(true))
        		.collect(Collectors.toList());
        return activeManagers;
    }
  	
    //REST API end point to update manager details
  	@PutMapping("/update")
  	public ResponseEntity<?> updateMgrDetails(@RequestBody Manager detachedMgr){
  		System.out.println("==>Inside updateMgrDetails() : "+detachedMgr+" of : "+getClass());
  		if(detachedMgr.getActive() == null){
  		    Manager manager = managerService.getMgrDetails(detachedMgr.getManagerId());
  		    detachedMgr.setActive(manager.getActive());
        }
  		return ResponseEntity.ok(managerService.updateMgrDetails(detachedMgr));	
  	}
  		
//    @DeleteMapping("/inactive/{mId}")
//    public ResponseEntity<Manager> inactiveMgrDetails(@PathVariable int mId)
//    {
//        System.out.println("==>Inside inactiveMgrDetails() : " + mId+" of : "+getClass());
//        Manager manager = managerService.getMgrDetails(mId);
//        manager.setActive(false);
//        return ResponseEntity.ok(managerService.updateMgrDetails(manager));
//    }
    
    /////USER///////////////////////////////////////////////////////////
    //REST API end point to serve list of users  
  	@GetMapping("/users")
  	public List<User>getAllUsers(){
  		System.out.println("==>Inside getAllUsers() of "+getClass());
  		return userService.fetchAllUsers();
  	}
  	
  	//REST API end point to delete the user details
  	@DeleteMapping("/users/{uId}")
    public ResponseEntity<String> deleteUsrDetails(@PathVariable int uId) {
  		System.out.println("==>Inside deleteUsrDetails() of : "+getClass());
   		System.out.println("==>user id=" + uId);
    	return ResponseEntity.ok(userService.deleteUserDetails(uId));
    }
  	
  	//REST API end point to get the user details by Id
	@GetMapping("/{userId}")
	public ResponseEntity<?> getUserDetails(@PathVariable int userId){
		System.out.println("==>Inside getUserDetails() : "+userId+" of : "+getClass());
		return ResponseEntity.ok(userService.getUserDetails(userId));
	}
	
	//REST API end point for updating user details
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUserDetails(@RequestBody User detachedUser,@PathVariable int id){
		System.out.println("==>Inside updateUserDetails() : "+detachedUser+" of : "+getClass());
		System.out.println("==>user id=" + id);
		//User existUser=userService.getUserDetails(id); //if not then throw exception
		return ResponseEntity.ok(userService.updateUserDetails(detachedUser));	
	}
  	////////////////////////////////////////////////////////////////////

}
