package com.app.controller;

import java.util.List;

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
import com.app.pojos.Admin;
import com.app.pojos.Manager;
import com.app.pojos.Turf;
import com.app.pojos.User;
import com.app.service.IAdminService;
import com.app.service.IManagerService;
import com.app.service.ITurfService;
import com.app.service.IUserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	//AdminController depends on IUserService, IManagerService, IAdminService and ITurfService 
	@Autowired
	private IUserService userService;
	@Autowired
	private IManagerService managerService;
	@Autowired
	private IAdminService adminService;
	@Autowired
	private ITurfService turfService;
	
	public AdminController() {
		System.out.println("==>In constructor of : "+getClass());
	}
	
	/////USER////////////////////////////////////////////////////
	//REST API end point to serve the list of users
	@GetMapping("/users")
	public List<User>getAllUsers(){
		System.out.println("==>Inside getAllUsers() of : "+getClass());
		return userService.fetchAllUsers();
	}
	
	//REST API end point to delete the user details
	@DeleteMapping("/user/{uId}")
  	public ResponseEntity<String> deleteUsrDetails(@PathVariable int uId) {
		System.out.println("==>Inside deleteUsrDetails() of : "+getClass());
 		System.out.println("==>user id=" + uId);
  		return ResponseEntity.ok(userService.deleteUserDetails(uId));
  	}
	
	/////MANAGER////////////////////////////////////////////////////
	//REST API end point to serve the list of managers
    @GetMapping("/managers")
    public List<Manager> getAllMgrs(){
        System.out.println("==>Inside getAllMgrs() of : "+getClass());
        return managerService.fetchAllManagers();
    }
    
    //REST API end point to delete the manager details
 	@DeleteMapping("/manager/{mId}")
 	public ResponseEntity<String> deleteMgrDetails(@PathVariable int mId) {
 		System.out.println("==>Inside deleteMgrDetails() of : "+getClass());
 		System.out.println("==>manager id : " + mId);
 		return ResponseEntity.ok(managerService.deleteMgrDetails(mId));
 	}
 	
 	//REST API end point to get manager details by id
 	@GetMapping("/manager/{managerId}")
	public ResponseEntity<?> getMgrDetails(@PathVariable int managerId) {
		System.out.println("==>Inside getMgrDetails() : " + managerId+" of : "+getClass());
		return ResponseEntity.ok(managerService.getMgrDetails(managerId));
	}

 	//REST API end point to update manager details
	@PutMapping("/update/{mid}")
	public ResponseEntity<?> updateMgrDetails(@RequestBody Manager detachedMgr, @PathVariable int mid) {
		System.out.println("==>Inside updateMgrDetails() : " + detachedMgr + ", " + mid+" of : "+getClass());
		//Manager existMgr = mservice.getMgrDetails(mid);
		return ResponseEntity.ok(managerService.updateMgrDetails(detachedMgr));
	}
	
 	/////ADMIN////////////////////////////////////////////////////
 	//REST API end point to register ADMIN
 	@PostMapping("/regAdmin")
	public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
		System.out.println("==>Inside registerAdmin() : " + admin);
		return new ResponseEntity<>(adminService.regAdmin(admin), HttpStatus.CREATED);
	}

 	//REST API end point for ADMIN login
	@PostMapping("/adminlogin")
	public ResponseEntity<?> loginAdmin(@RequestBody Admin admin) throws Exception {
		System.out.println("==>Inside loginAdmin() : " + admin);
		String username = admin.getUsername();
		String pass = admin.getPassword();
		Admin adminObj = null;
		if (username != null && pass != null) 
			adminObj = adminService.fetchAdminByUserIdAndPassword(username, pass);
		if (adminObj == null) 
			return GlobalExceptionHandler.handleRuntimeException(new RuntimeException("Admin does not exist!")) ;
		return ResponseEntity.ok(adminObj);
	}

	//REST API end point to get ADMIN details
	@GetMapping("/{adminId}")
	public ResponseEntity<?> getAdminDetails(@PathVariable int adminId) {
		System.out.println("==>Inside getAdminDetails() : " + adminId);
		return ResponseEntity.ok(adminService.getAdminDetails(adminId));
	}
 	
	/////TURF////////////////////////////////////////////////////
	//REST API end point to get list of turf
	@GetMapping("/turfs")
	public List<Turf> fetchAllTurf() {
		System.out.println("==>Inside fetchAllTurf() of : "+getClass());
		return turfService.findAll();
	}
			
	//REST API end point to delete turf details by id
	@DeleteMapping("/turf/{turfId}")
	public ResponseEntity<String> deleteTurf(@PathVariable int turfId) {
		System.out.println("==>Inside deleteMgrDetails() of : "+getClass());
		System.out.println("==>turfId : " + turfId);
		return ResponseEntity.ok(turfService.deleteTurfDetails(turfId));
	}
	
	//REST API end point to delete all turf under particular manager and also delete manager 
	@DeleteMapping("/{mId}")
	public String deleteAllTurfUnderManager(@PathVariable int mId) {
		System.out.println("==>Inside deleteAllTurfUnderManager() of : "+getClass());
		List<Turf> turflist = turfService.findTurfByManagerId(mId);
		for (Turf t : turflist) {
			deleteTurf(t.getTurfId());
		}
		deleteMgrDetails(mId);
		return "Manager having id :"+mId+" and turf under him/her has been removed!";
	}

	//REST API end point to make all the turf unavailable if manager is inactive
	@DeleteMapping("/inactive/{mId}")
	public String InactiveAllTurfUnderManager(@PathVariable int mId) {
		System.out.println("==>Inside InactiveAllTurfUnderManager() of : "+getClass());
		List<Turf> turflist = turfService.findTurfByManagerId(mId);
		for (Turf t : turflist) {
			t.setAvailable(false);
			turfService.updateTurfDetails(t);
		}
		Manager manager = managerService.getMgrDetails(mId);
		manager.setActive(false);
		managerService.updateMgrDetails(manager);
		return "Manager having id :"+mId+" and turf under him/her has been inactivated!";
	}
	
}
