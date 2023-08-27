package com.app.service;

import java.util.List;

import com.app.pojo.Manager;

public interface IManagerService {
	Manager regManager(Manager transientManager);
	Manager fetchManagerByEmailIdAndPassword(String email, String password);
	List<Manager> fetchAllManagers();
	Manager getMgrDetails(int managerId);
	String deleteMgrDetails(int managerId);
	Manager updateMgrDetails(Manager detachedMgr);

}
