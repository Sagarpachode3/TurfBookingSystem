package com.app.service;

import com.app.pojos.Admin;

import java.util.List;


public interface IAdminService {
    
	Admin regAdmin(Admin transientAdmin);
    Admin fetchAdminByUserIdAndPassword(String username, String password);
    Admin getAdminDetails(int adminId);
    List<Admin> fetchAllAdmin();

}
