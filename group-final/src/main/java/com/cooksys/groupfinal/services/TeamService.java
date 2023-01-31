package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.ProjectDto;

public interface TeamService {

    ProjectDto createProject(Long id, ProjectDto projectDto);
}
