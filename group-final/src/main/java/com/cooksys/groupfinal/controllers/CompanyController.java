package com.cooksys.groupfinal.controllers;

import com.cooksys.groupfinal.dtos.*;
import com.cooksys.groupfinal.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/company")
@RequiredArgsConstructor
public class CompanyController {

    private final CompanyService companyService;

    @GetMapping("/{id}/users")
    @CrossOrigin(origins = "*")
    public Set<FullUserDto> getAllUsers(@PathVariable Long id) {
        return companyService.getAllUsers(id);
    }
    
    @GetMapping("/")
    @CrossOrigin(origins = "*")
    public List<CompanyDto> getAllCompanies() {
    	return companyService.getAllCompanies();
    }
	
	@GetMapping("/{id}/users/active")
	@CrossOrigin(origins = "*")
    public Set<BasicUserDto> getAllActiveUsers(@PathVariable Long id) {
        return companyService.getAllActiveUsers(id);
    }
	
	@GetMapping("/{id}/announcements")
	@CrossOrigin(origins = "*")
    public Set<AnnouncementDto> getAllAnnouncements(@PathVariable Long id) {
        return companyService.getAllAnnouncements(id);
    }

    @GetMapping("/{id}/teams")
    @CrossOrigin(origins = "*")
    public Set<TeamDto> getAllTeams(@PathVariable Long id) {
        return companyService.getAllTeams(id);
    }

    @PostMapping("/{id}/teams")
    @CrossOrigin(origins = "*")
    public TeamDto createTeam(@PathVariable Long id, @RequestBody TeamDto teamDto) {
        return companyService.createTeam(id, teamDto);
    }

    @PostMapping("/{id}/users")
    @CrossOrigin(origins = "*")
    public BasicUserDto createUser(@PathVariable Long id, @RequestBody UserRequestDto userRequestDto) {
        return companyService.createUser(id, userRequestDto);
    }

	// createAnnouncement
	
	@PostMapping("/{id}/announcements")
	@CrossOrigin(origins = "*")
	public AnnouncementDto createAnnouncement(@PathVariable Long id, @RequestBody AnnouncementDto announcementDto) {
		
		return companyService.createAnnouncement(id, announcementDto);
		
	}
	
	// updateProject
	
	@PatchMapping("/{id}/teams/{teamID}/projects")
	@CrossOrigin(origins = "*")
	public ProjectDto updateProject(@PathVariable Long id, @PathVariable Long teamID, @RequestBody ProjectDto projectDto) {
	
		return companyService.updateProject(id, teamID, projectDto);
		
	}

    @GetMapping("/{id}/projects")
    @CrossOrigin(origins = "*")
    public Set<TeamWithProjectsDto> getAllProjects(@PathVariable Long id) {
        return companyService.getAllProjects(id);

    }

}
