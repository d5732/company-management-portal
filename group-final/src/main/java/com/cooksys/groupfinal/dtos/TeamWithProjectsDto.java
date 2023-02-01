package com.cooksys.groupfinal.dtos;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@Data
public class TeamWithProjectsDto {

    private Long id;

    private String name;

    private String description;

    private Set<BasicUserDto> users;

    private Set<BasicProjectDto> projects;

}
