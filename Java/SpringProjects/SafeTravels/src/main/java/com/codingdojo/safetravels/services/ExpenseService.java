package com.codingdojo.safetravels.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.safetravels.models.Expense;
import com.codingdojo.safetravels.repositories.ExpenseRepository;

@Service
public class ExpenseService {
	
	@Autowired
	ExpenseRepository expenseRepository;
	
	public Expense createNewExpense(Expense expense) {
		return expenseRepository.save(expense);
	}
	
	public ArrayList<Expense> getAllExpenses(){
		return expenseRepository.findAll();
	}
}
