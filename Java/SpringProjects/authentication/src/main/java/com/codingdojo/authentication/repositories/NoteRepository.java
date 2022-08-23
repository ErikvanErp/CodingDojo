package com.codingdojo.authentication.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.codingdojo.authentication.models.Note;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long>{

}
