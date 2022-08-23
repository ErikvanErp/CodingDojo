package com.codingdojo.authentication.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.authentication.models.Listing;
import com.codingdojo.authentication.repositories.ListingRepository;

@Service
public class ListingService {
	@Autowired
	ListingRepository listingRepo;
	
	public Listing saveNewListing(Listing listing) {
		return listingRepo.save(listing);
	}
	public void updateListing(Listing listing) {
		listingRepo.save(listing);
	}
	public Listing getListingById(Long id) {
		Optional<Listing> listing = listingRepo.findById(id);
		if(listing.isPresent()) {
			return listing.get();
		} else {
			return null;
		}
	}
	public List<Listing> getAllListings(){
		return listingRepo.findAll();		
	}
	public void deleteListing(Long id) {
		Optional<Listing> listing = listingRepo.findById(id);
		if(listing.isPresent()) {
			listingRepo.delete(listing.get());
		}		
	}
}
