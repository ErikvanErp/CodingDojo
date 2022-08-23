package com.codingdojo.authentication.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.authentication.models.Listing;

@Repository
public interface ListingRepository extends CrudRepository<Listing, Long>{
	List<Listing> findAll();
}
