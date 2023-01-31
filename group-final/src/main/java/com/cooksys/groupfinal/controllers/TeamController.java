package com.cooksys.groupfinal.controllers;

import com.cooksys.groupfinal.dtos.ProjectDto;
import org.springframework.web.bind.annotation.*;

import com.cooksys.groupfinal.services.TeamService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/teams")
@RequiredArgsConstructor
public class TeamController {
	
	private final TeamService teamService;

	@PostMapping("/{id}/projects")
	public ProjectDto createProject(@PathVariable Long id, @RequestBody ProjectDto projectDto) {
		System.out.println("Team ID" + id);
		return teamService.createProject(id, projectDto);
	}
}
