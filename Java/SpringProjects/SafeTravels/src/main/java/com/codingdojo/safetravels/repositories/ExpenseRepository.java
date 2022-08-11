package com.codingdojo.safetravels.repositories;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.safetravels.models.Expense;

@Repository
public interface ExpenseRepository extends CrudRepository<Expense, Long> {

	@SuppressWarnings("unchecked")
	Expense save(Expense expense);
	ArrayList<Expense> findAll();
	Optional<Expense> findById(Long id);

}
