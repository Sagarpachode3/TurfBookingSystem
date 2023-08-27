package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.ManagerRepository;
import com.app.pojo.Manager;

@Service
@Transactional
public class ManagerServiceImpl implements IManagerService {

	//ManagerServiceImpl depends on ManagerRepository i/f
		@Autowired
		private ManagerRepository managerRepository;
		
		@Override
		public Manager regManager(Manager transientManager) {
			return managerRepository.save(transientManager);
		}

		@Override
		public Manager fetchManagerByEmailIdAndPassword(String email, String password) {
			return managerRepository.findManagerByEmailIdAndPassword(email, password);
		}

		@Override
		public List<Manager> fetchAllManagers() {
			return managerRepository.findAll();
		}

		@Override
		public Manager getMgrDetails(int managerId) {
			return managerRepository.findById(managerId).get();
		}
		
		@Override
		public String deleteMgrDetails(int managerId) {
			managerRepository.deleteById(managerId);	
			//throws IllegalArgumentException in case the given id is null
			return "Manager having id="+managerId+" has been removed!";
		}

		@Override
		public Manager updateMgrDetails(Manager detachedMgr) {
			return managerRepository.save(detachedMgr);
		}
}
