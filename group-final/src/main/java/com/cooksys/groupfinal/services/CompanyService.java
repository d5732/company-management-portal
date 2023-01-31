package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.*;

import java.util.Set;

public interface CompanyService {

    Set<FullUserDto> getAllUsers(Long id);

    Set<AnnouncementDto> getAllAnnouncements(Long id);

    Set<TeamDto> getAllTeams(Long id);

    BasicUserDto createUser(Long id, UserRequestDto userRequestDto);

    TeamDto createTeam(Long id, TeamDto teamDto);

}
