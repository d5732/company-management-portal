package com.cooksys.groupfinal.mappers;

import com.cooksys.groupfinal.dtos.TeamWithProjectsDto;
import com.cooksys.groupfinal.entities.Team;
import org.mapstruct.Mapper;

import java.util.Set;

@Mapper(componentModel = "spring", uses = {BasicUserMapper.class, BasicProjectMapper.class})
public interface TeamWithProjectsMapper {

    TeamWithProjectsDto entityToDto(Team team);

    Set<TeamWithProjectsDto> entitiesToDtos(Set<Team> teams);

}