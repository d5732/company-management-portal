package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.ProjectDto;

import java.util.Set;

public interface TeamService {

    ProjectDto createProject(Long id, ProjectDto projectDto);

    Set<ProjectDto> getAllProjects(Long id);
}
