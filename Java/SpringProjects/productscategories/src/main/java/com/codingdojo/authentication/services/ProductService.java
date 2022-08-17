package com.codingdojo.authentication.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.authentication.models.Category;
import com.codingdojo.authentication.models.Product;
import com.codingdojo.authentication.repositories.CategoryRepository;
import com.codingdojo.authentication.repositories.ProductRepository;

@Service
public class ProductService {
	@Autowired
	ProductRepository productRepo;
	
	@Autowired
	CategoryRepository categoryRepo;
	
	public Product saveNewProduct(Product product) {
		return productRepo.save(product);
	}
	public List<Product> getAllProducts(){
		return productRepo.findAll();
	}
	public Product getProduct(Long id) {
		Optional<Product> product = productRepo.findById(id);
		if (product.isPresent()) {
			return product.get();
		} else {
			return null;
		}
	}
	public List<Product> getOtherProducts(Category category){
		return productRepo.findByCategoriesNotContains(category);
	}
	public void addCategoryToProduct(Long categoryId, Long productId) {
		Optional<Category> optionalCategory = categoryRepo.findById(categoryId);
		Optional<Product> optionalProduct = productRepo.findById(productId);
		if(optionalCategory.isPresent() && optionalProduct.isPresent()) {
			Category category = optionalCategory.get();
			Product product = optionalProduct.get();
			product.getCategories().add(category);
			productRepo.save(product);
		} else {
			return;
		}
	}

}
