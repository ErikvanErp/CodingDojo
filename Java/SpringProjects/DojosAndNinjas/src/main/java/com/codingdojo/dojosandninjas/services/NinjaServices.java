package com.codingdojo.dojosandninjas.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.dojosandninjas.models.Ninja;
import com.codingdojo.dojosandninjas.repositories.NinjaRepository;

@Service
public class NinjaServices {
	
	@Autowired
	NinjaRepository ninjaRepository;
	
	public Ninja createNewNinja(Ninja ninja) {
		return ninjaRepository.save(ninja);
	}
	
	public ArrayList<Ninja> getAllNinjas(){
		return ninjaRepository.findAll();
	}
}
