package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.AnnouncementDto;
import com.cooksys.groupfinal.dtos.FullUserDto;
import com.cooksys.groupfinal.dtos.ProjectDto;
import com.cooksys.groupfinal.dtos.TeamDto;

import java.util.Set;

public interface CompanyService {

    Set<FullUserDto> getAllUsers(Long id);

    Set<AnnouncementDto> getAllAnnouncements(Long id);

    Set<TeamDto> getAllTeams(Long id);

    Set<ProjectDto> getAllProjects(Long companyId, Long teamId);

    TeamDto createTeam(Long id, TeamDto teamDto);

}
