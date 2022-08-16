package com.codingdojo.dojosandninjas.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninjas.models.Dojo;
import com.codingdojo.dojosandninjas.repositories.DojosRepository;

@Service
public class DojosServices {
	
	@Autowired
	DojosRepository dojosRepository;
	
	public Dojo createNewDojo(Dojo dojo) {
		return dojosRepository.save(dojo);
	}
	
	public Dojo getDojoById(Long id) {
		Optional<Dojo> dojo = dojosRepository.findById(id);
		if(dojo.isPresent()) {
			return dojo.get();
		} else {
			return null;
		}
	}
	
	public ArrayList<Dojo> getAllDojos(){
		return dojosRepository.findAll();
	}

}
