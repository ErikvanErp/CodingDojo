package com.codingdojo.dojosandninjas.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.dojosandninjas.models.Ninja;

@Repository
public interface NinjaRepository extends CrudRepository<Ninja, Long> {
	Ninja save(Ninja ninja);
	ArrayList<Ninja> findAll();
}
