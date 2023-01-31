package com.cooksys.groupfinal.services;

import java.util.Set;
import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.dtos.ProjectDto;

import java.util.Set;

public interface TeamService {

    ProjectDto createProject(Long id, ProjectDto projectDto);

    Set<ProjectDto> getAllProjects(Long id);

	Set<BasicUserDto> getAllUsersInTeam(Long id);

}
