package com.cooksys.groupfinal.controllers;

import com.cooksys.groupfinal.dtos.AnnouncementDto;
import com.cooksys.groupfinal.dtos.FullUserDto;
import com.cooksys.groupfinal.dtos.ProjectDto;
import com.cooksys.groupfinal.dtos.TeamDto;
import com.cooksys.groupfinal.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("/{id}/users")
    public Set<FullUserDto> getAllUsers(@PathVariable Long id) {
        return companyService.getAllUsers(id);
    }

    @GetMapping("/{id}/announcements")
    public Set<AnnouncementDto> getAllAnnouncements(@PathVariable Long id) {
        return companyService.getAllAnnouncements(id);
    }

    @GetMapping("/{id}/teams")
    public Set<TeamDto> getAllTeams(@PathVariable Long id) {
        return companyService.getAllTeams(id);
    }

    @GetMapping("/{companyId}/teams/{teamId}/projects")
    public Set<ProjectDto> getAllProjects(@PathVariable Long companyId, @PathVariable Long teamId) {
        return companyService.getAllProjects(companyId, teamId);
    }

    @PostMapping("/{id}/teams")
    public TeamDto createTeam(@PathVariable Long id, @RequestBody TeamDto teamDto) {
        return companyService.createTeam(id, teamDto);
    }

}
