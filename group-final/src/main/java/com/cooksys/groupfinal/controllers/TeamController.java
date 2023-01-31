package com.cooksys.groupfinal.controllers;

import com.cooksys.groupfinal.dtos.ProjectDto;
import org.springframework.web.bind.annotation.*;

import com.cooksys.groupfinal.services.TeamService;

import lombok.RequiredArgsConstructor;

import java.util.Set;

@RestController
@RequestMapping("/teams")
@RequiredArgsConstructor
public class TeamController {
	
	private final TeamService teamService;

	@GetMapping("/{id}/projects")
	public Set<ProjectDto> getAllProjects(@PathVariable Long id) {
		return teamService.getAllProjects(id);
	}

	@PostMapping("/{id}/projects")
	public ProjectDto createProject(@PathVariable Long id, @RequestBody ProjectDto projectDto) {
		return teamService.createProject(id, projectDto);
	}
}
