package com.cooksys.groupfinal.controllers;


import com.cooksys.groupfinal.dtos.ProjectDto;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.services.TeamService;

import lombok.RequiredArgsConstructor;

import java.util.Set;

@RestController
@RequestMapping("/teams")
@RequiredArgsConstructor
public class TeamController {
	
	private final TeamService teamService;
	
	@GetMapping("/{id}/users")
    public Set<BasicUserDto> getAllUsersInTeam(@PathVariable Long id) {
        return teamService.getAllUsersInTeam(id);
    }

	@GetMapping("/{id}/projects")
	public Set<ProjectDto> getAllProjects(@PathVariable Long id) {
		return teamService.getAllProjects(id);
	}

	@PostMapping("/{id}/projects")
	public ProjectDto createProject(@PathVariable Long id, @RequestBody ProjectDto projectDto) {
		return teamService.createProject(id, projectDto);
	}
}
