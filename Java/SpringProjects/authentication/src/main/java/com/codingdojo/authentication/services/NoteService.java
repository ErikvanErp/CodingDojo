package com.codingdojo.authentication.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.authentication.models.Note;
import com.codingdojo.authentication.repositories.NoteRepository;

@Service
public class NoteService {
	@Autowired
	NoteRepository noteRepo;
	
	public Note saveNewNote(Note note) {
		return noteRepo.save(note);
	}

}
