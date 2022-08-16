package com.codingdojo.authentication.services;

import java.util.Optional;

import org.mindrot.jbcrypt.BCrypt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;

import com.codingdojo.authentication.models.LoginUser;
import com.codingdojo.authentication.models.User;
import com.codingdojo.authentication.repositories.UserRepository;
        
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
		User savedUser = userRepo.save(newUser); 
		return savedUser;
    }
    
    public User login(LoginUser newLogin, BindingResult result) {
    	Optional<User> existingUser = userRepo.findByEmail(newLogin.getEmail()); 
    	if (existingUser.isPresent()) {
    		if (!BCrypt.checkpw(newLogin.getPassword(), existingUser.get().getHashedPassword())) {
    			result.rejectValue("password", "invalidCredentials", "The login information is not recognized.");
    		};
    	} else {
    		result.rejectValue("password", "invalidCredentials", "The login information is not recognized.");    		
    	}
    	if(result.hasErrors()) {
    		return null;    		
    	} else {
    		return existingUser.get();
    	}
    }
}
