package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojo.User;

@Repository("userRepository")
public interface UserRepository extends JpaRepository<User, Integer> {
	public User findUserByEmailIdAndPassword(String email, String password);
	public User findByEmailId(String email);

}
