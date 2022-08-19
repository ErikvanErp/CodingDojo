package com.codingdojo.projectmanager.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.codingdojo.projectmanager.models.Project;
import com.codingdojo.projectmanager.models.User;
import com.codingdojo.projectmanager.repositories.ProjectRepository;
import com.codingdojo.projectmanager.repositories.UserRepository;

@Service
public class ProjectService {
	@Autowired
	ProjectRepository projectRepo;
	
	@Autowired
	UserRepository userRepo;
	
	public Project saveNewProject(Project project) {
		return projectRepo.save(project);
	}
	public void updateProject(Project project) {
		projectRepo.save(project);
	}
	public List<Project> getAllProjects(){
		return projectRepo.findAll();
	}
	public Project getProjectById(Long id) {
		Optional<Project> project = projectRepo.findById(id);
		if (project.isPresent()) {
			return project.get();
		} else {
			return null;
		}
	}
	public void deleteProject(Long id) {
		Optional<Project> project = projectRepo.findById(id);
		if (project.isPresent()) {
			projectRepo.delete(project.get());
		}
	}
	public List<Project> getTeamsByMember(User user){
		return projectRepo.findByMembersContains(user);
	}
	public List<Project> getTeamsOfWhichNotMember(User user){
		return projectRepo.findByMembersNotContains(user);
	}
	public void addMemberToTeam(Long userId, Long projectId) {
		Optional<User> optUser = userRepo.findById(userId);
		Optional<Project> optProject = projectRepo.findById(projectId);
		if (optUser.isPresent() && optProject.isPresent()) {
			User user = optUser.get();
			Project project = optProject.get();
			project.getMembers().add(user);
			projectRepo.save(project);
		}
	}
	public void removeMemberFromTeam(Long userId, Long projectId) {
		Optional<User> optUser = userRepo.findById(userId);
		Optional<Project> optProject = projectRepo.findById(projectId);
		if (optUser.isPresent() && optProject.isPresent()) {
			User user = optUser.get();
			Project project = optProject.get();
			project.getMembers().remove(user);
			projectRepo.save(project);
		}
	}
	
}
