package com.app.service;

import java.util.List;

import com.app.pojos.Admin;

public interface IAdminService {

	Admin regAdmin(Admin transientAdmin);
    Admin fetchAdminByUserIdAndPassword(String username, String password);
    Admin getAdminDetails(int adminId);
    List<Admin> fetchAllAdmin();
}
