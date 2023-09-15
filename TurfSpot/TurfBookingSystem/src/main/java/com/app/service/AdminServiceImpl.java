package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminRepository;
import com.app.pojos.Admin;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	//AdminServiceImpl depends on adminRepository
    @Autowired
    private AdminRepository adminRepository;

    @Override
    public Admin regAdmin(Admin transientAdmin) {
        return adminRepository.save(transientAdmin);
    }

    @Override
    public Admin fetchAdminByUserIdAndPassword(String username, String password) {
        return adminRepository.findAdminByUserIdAndPassword(username,password);
    }

    @Override
    public Admin getAdminDetails(int adminId) {
        return adminRepository.findById(adminId).get();
    }

    @Override
    public List<Admin> fetchAllAdmin() {
        return adminRepository.findAll();
    }

}
