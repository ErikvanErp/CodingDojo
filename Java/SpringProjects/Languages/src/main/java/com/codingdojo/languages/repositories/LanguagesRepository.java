package com.codingdojo.languages.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.languages.models.Language;

@Repository 
public interface LanguagesRepository extends CrudRepository<Language, Long> {
	
	@SuppressWarnings("unchecked")
	Language save(Language language);
	List<Language> findAll();
	Optional<Language> findById(Long id);
}
