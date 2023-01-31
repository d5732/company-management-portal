package com.cooksys.groupfinal.services.impl;


import com.cooksys.groupfinal.dtos.ProjectDto;
import com.cooksys.groupfinal.entities.Company;
import com.cooksys.groupfinal.entities.Project;
import com.cooksys.groupfinal.entities.Team;
import com.cooksys.groupfinal.exceptions.NotFoundException;
import com.cooksys.groupfinal.mappers.ProjectMapper;
import com.cooksys.groupfinal.repositories.ProjectRepository;
import com.cooksys.groupfinal.repositories.TeamRepository;
import java.util.HashSet;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.services.TeamService;
import com.cooksys.groupfinal.entities.Team;
import com.cooksys.groupfinal.entities.User;
import com.cooksys.groupfinal.mappers.BasicUserMapper;

import lombok.RequiredArgsConstructor;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TeamServiceImpl implements TeamService {
	
	private final CompanyServiceImpl companyserviceimpl;
	private final BasicUserMapper basicUserMapper;
    private final ProjectMapper projectMapper;
    private final ProjectRepository projectRepository;
    private final TeamRepository teamRepository;

    @Override
    public ProjectDto createProject(Long id, ProjectDto projectDto) {

        Optional<Team> team = teamRepository.findById(id);
        if (team.isEmpty()) {
            throw new NotFoundException("A team with id " + id + " does not exist.");
        }

        Team teamToSave = team.get();

        Project projectToSave = projectMapper.dtoToEntity(projectDto);
        projectToSave.setTeam(teamToSave);

        return projectMapper.entityToDto(projectRepository.saveAndFlush(projectToSave));
    }

	@Override
	public Set<BasicUserDto> getAllUsersInTeam(Long id) {
		Team team = companyserviceimpl.findTeam(id);
		Set<User> usersInTeam = new HashSet<>();
		team.getUsers().forEach(usersInTeam::add);
		return basicUserMapper.entitiesToBasicUserDtos(usersInTeam);
	}
}
