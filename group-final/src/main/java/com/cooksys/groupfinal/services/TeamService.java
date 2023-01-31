package com.cooksys.groupfinal.services;

import java.util.Set;
import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.dtos.ProjectDto;

public interface TeamService {

    ProjectDto createProject(Long id, ProjectDto projectDto);


	Set<BasicUserDto> getAllUsersInTeam(Long id);
	

}
