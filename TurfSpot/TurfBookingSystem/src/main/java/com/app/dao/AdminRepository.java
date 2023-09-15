package com.app.dao;

import com.app.pojos.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {

	@Query("select a from Admin a where a.username = :username and a.password = :password")
	Admin findAdminByUserIdAndPassword(String username, String password);

}

