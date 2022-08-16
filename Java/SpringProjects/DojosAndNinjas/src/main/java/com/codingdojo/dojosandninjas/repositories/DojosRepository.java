package com.codingdojo.dojosandninjas.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.dojosandninjas.models.Dojo;

@Repository
public interface DojosRepository extends CrudRepository<Dojo, Long>{
	Dojo save(Dojo dojo);
	Optional<Dojo> findById(Long id);
	ArrayList<Dojo> findAll();
}
