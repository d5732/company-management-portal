package com.cooksys.groupfinal.controllers;

import com.cooksys.groupfinal.dtos.*;
import com.cooksys.groupfinal.services.CompanyService;
import com.cooksys.groupfinal.dtos.BasicUserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Set;
import java.util.List;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("/{id}/users")
    public Set<FullUserDto> getAllUsers(@PathVariable Long id) {
        return companyService.getAllUsers(id);
    }
    
    @GetMapping("/company/")
    public List<CompanyDto> getAllCompanies() {
    	return companyService.getAllCompanies();
    }
	
	@GetMapping("/{id}/users/active")
    public Set<BasicUserDto> getAllActiveUsers(@PathVariable Long id) {
        return companyService.getAllActiveUsers(id);
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

    @PostMapping("/{id}/users")
    public BasicUserDto createUser(@PathVariable Long id, @RequestBody UserRequestDto userRequestDto) {
        return companyService.createUser(id, userRequestDto);
    }

}
