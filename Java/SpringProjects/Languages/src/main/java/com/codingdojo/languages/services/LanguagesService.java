package com.codingdojo.languages.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.languages.models.Language;
import com.codingdojo.languages.repositories.LanguagesRepository;

@Service
public class LanguagesService {
	
	@Autowired
	LanguagesRepository languagesRepository;
	
	public Language createNewLanguage(Language language) {
		return languagesRepository.save(language);
	}
	
	public List<Language> getAllLanguages() {
		return languagesRepository.findAll();
	}

	public Language findLanguageById(Long id) {
		Optional<Language> language = languagesRepository.findById(id);
		if (language.isPresent()) {
			return language.get();
		} else {
			return null;
		}
	}
	
	public void deleteLanguageById(Long id) {
		languagesRepository.deleteById(id);
	}
}
