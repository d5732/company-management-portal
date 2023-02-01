package com.cooksys.groupfinal.mappers;

import com.cooksys.groupfinal.dtos.BasicProjectDto;
import com.cooksys.groupfinal.entities.Project;
import org.mapstruct.Mapper;

import java.util.Set;

@Mapper(componentModel = "spring")
public interface BasicProjectMapper {

    BasicProjectDto entityToDto(Project project);

    Set<BasicProjectDto> entitiesToDtos(Set<Project> projects);

}
