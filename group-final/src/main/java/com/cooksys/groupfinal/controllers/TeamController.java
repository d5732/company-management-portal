package com.cooksys.groupfinal.controllers;


import com.cooksys.groupfinal.dtos.ProjectDto;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

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
	@CrossOrigin(origins = "*")
    public Set<BasicUserDto> getAllUsersInTeam(@PathVariable Long id) {
        return teamService.getAllUsersInTeam(id);
    }

	@GetMapping("/{id}/projects")
	@CrossOrigin(origins = "*")
	public Set<ProjectDto> getAllProjects(@PathVariable Long id) {
		return teamService.getAllProjects(id);
	}

	@PostMapping("/{id}/projects")
	@CrossOrigin(origins = "*")
	public ProjectDto createProject(@PathVariable Long id, @RequestBody ProjectDto projectDto) {
		return teamService.createProject(id, projectDto);
	}
}
