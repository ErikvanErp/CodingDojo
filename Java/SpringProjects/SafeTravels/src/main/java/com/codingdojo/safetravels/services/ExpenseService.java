package com.codingdojo.safetravels.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.safetravels.models.Expense;
import com.codingdojo.safetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	
	@Autowired
	ExpenseRepository expenseRepository;
	
	public ArrayList<Expense> getAllExpenses(){
		return expenseRepository.findAll();
	}
	
	public Expense getExpenseById(Long id) {
		Optional<Expense> expense = expenseRepository.findById(id);
		if(expense.isPresent()) { 
			return expense.get(); 
		} else {
			return null;
		}
	}
	
	public Expense createNewExpense(Expense e) {
		return expenseRepository.save(e);
	}
	
	public void updateExpense(Expense e) {
		expenseRepository.save(e);
	}
	
	public void deleteExpense(Long id) {
		expenseRepository.deleteById(id);
	}
	
}
