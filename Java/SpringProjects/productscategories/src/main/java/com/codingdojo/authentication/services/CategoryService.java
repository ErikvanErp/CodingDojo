package com.codingdojo.authentication.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.authentication.models.Category;
import com.codingdojo.authentication.models.Product;
import com.codingdojo.authentication.repositories.CategoryRepository;

@Service
public class CategoryService {
	@Autowired
	CategoryRepository categoryRepo;
	
	public Category saveNewCategory(Category category) {
		return categoryRepo.save(category);
	}
	public List<Category> getAllCategories(){
		return categoryRepo.findAll();
	}
	
	public List<Category> getOtherCategories(Product product){
		return categoryRepo.findByProductsNotContains(product);
	}
	public Category getCategory(Long id) {
		Optional<Category> category = categoryRepo.findById(id);
		if (category.isPresent()) {
			return category.get();
		} else {
			return null;
		}
	}
}
