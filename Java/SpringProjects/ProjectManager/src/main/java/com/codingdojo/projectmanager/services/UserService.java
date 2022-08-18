package com.codingdojo.projectmanager.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.projectmanager.models.LoginUser;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.repositories.UserRepository;
        
@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepo;
    
    public User register(User newUser, BindingResult result) {
    	Optional<User> exisitingUser = userRepo.findByEmail(newUser.getEmail()); 
    	if (exisitingUser.isPresent()) {
    		result.rejectValue("email", "emailAlreadyRegistered", "The email address is already registered.");
    	}
    	if (!newUser.getPassword().equals(newUser.getConfirm())){
    		result.rejectValue("confirm", "passwordMatchError", "Confirm password does not match password.");
    	}
    	if(result.hasErrors()) {
    		return null;    		
    	}
		newUser.setHashedPassword(BCrypt.hashpw(newUser.getPassword(), BCrypt.gensalt()));
		return userRepo.save(newUser); 
    }
    
    public User login(LoginUser newLogin, BindingResult result) {
    	Optional<User> existingUser = userRepo.findByEmail(newLogin.getEmail()); 
    	if (!existingUser.isPresent()) {
    		result.rejectValue("password", "invalidCredentials", "Invalid login.");    		
    		return null;    		
    	}
    	User user = existingUser.get();
    	if (!BCrypt.checkpw(newLogin.getPassword(), user.getHashedPassword())) {
    		result.rejectValue("password", "invalidCredentials", "Invalid login.");
    	}
    	if(result.hasErrors()) {
    		return null;    		
    	}
    	return user;
    }
}