package com.cooksys.groupfinal.services.impl;

import com.cooksys.groupfinal.dtos.*;
import com.cooksys.groupfinal.entities.*;
import com.cooksys.groupfinal.exceptions.BadRequestException;
import com.cooksys.groupfinal.exceptions.NotFoundException;
import com.cooksys.groupfinal.mappers.*;
import com.cooksys.groupfinal.repositories.CompanyRepository;
import com.cooksys.groupfinal.repositories.ProjectRepository;
import com.cooksys.groupfinal.repositories.TeamRepository;
import com.cooksys.groupfinal.repositories.UserRepository;
import com.cooksys.groupfinal.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.*;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
	
	private final CompanyRepository companyRepository;
	private final TeamRepository teamRepository;
	private final UserRepository userRepository;
	private final ProjectRepository projectRepository;
	private final FullUserMapper fullUserMapper;
	private final AnnouncementMapper announcementMapper;
	private final TeamMapper teamMapper;
	private final ProjectMapper projectMapper;
	private final BasicUserMapper basicUserMapper;

    private Company findCompany(Long id) {
        Optional<Company> company = companyRepository.findById(id);
        if (company.isEmpty()) {
            throw new NotFoundException("A company with the provided id does not exist.");
        }
        return company.get();
    }

    public static boolean notValidUser(Optional<Company> optionalCompany, Optional<User> optionalUser) {
        return optionalUser.isEmpty() || !optionalUser.get().getCompanies().contains(optionalCompany.get());
    }

    private Team findTeam(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        if (team.isEmpty()) {
            throw new NotFoundException("A team with the provided id does not exist.");
        }
        return team.get();
    }

    @Override
    public Set<FullUserDto> getAllUsers(Long id) {
        Company company = findCompany(id);
        Set<User> filteredUsers = new HashSet<>();
        company.getEmployees().forEach(filteredUsers::add);
        filteredUsers.removeIf(user -> !user.isActive());
        return fullUserMapper.entitiesToFullUserDtos(filteredUsers);
    }

    @Override
    public Set<AnnouncementDto> getAllAnnouncements(Long id) {
        Company company = findCompany(id);
        List<Announcement> sortedList = new ArrayList<Announcement>(company.getAnnouncements());
        sortedList.sort(Comparator.comparing(Announcement::getDate).reversed());
        Set<Announcement> sortedSet = new HashSet<Announcement>(sortedList);
        return announcementMapper.entitiesToDtos(sortedSet);
    }

    @Override
    public Set<TeamDto> getAllTeams(Long id) {
        Company company = findCompany(id);
        return teamMapper.entitiesToDtos(company.getTeams());
    }

    @Override
    public Set<ProjectDto> getAllProjects(Long companyId, Long teamId) {
        Company company = findCompany(companyId);
        Team team = findTeam(teamId);
        if (!company.getTeams().contains(team)) {
            throw new NotFoundException("A team with id " + teamId + " does not exist at company with id " + companyId + ".");
        }
        Set<Project> filteredProjects = new HashSet<>();
        team.getProjects().forEach(filteredProjects::add);
        filteredProjects.removeIf(project -> !project.isActive());
        return projectMapper.entitiesToDtos(filteredProjects);
    }

    public TeamDto createTeam(Long id, TeamDto teamDto) {
        Optional<Company> optionalCompany = companyRepository.findById(id);
        if (optionalCompany.isEmpty()) {
            throw new NotFoundException("No company found with id " + id);
        }
        if (teamDto.getUsers() == null || teamDto.getUsers().isEmpty()) {
            throw new BadRequestException("Request body was empty object or users set was null or empty");
        }

        Team team = new Team();
        for (BasicUserDto basicUserDto : teamDto.getUsers()) {
            if (basicUserDto == null || basicUserDto.getId() == null) {
                throw new BadRequestException("One or more user in the request was null or contained no id");
            }
            Optional<User> optionalUser = userRepository.findByIdAndActiveTrue(basicUserDto.getId());
            if (notValidUser(optionalCompany, optionalUser)) {
                throw new BadRequestException("One or more users in the team set was not valid");
            }
            optionalUser.get().getTeams().add(team);
            team.getUsers().add(optionalUser.get());
        }
        team.setCompany(optionalCompany.get());
        team.setName(teamDto.getName());
        team.setDescription(teamDto.getDescription());
        return teamMapper.entityToDto(teamRepository.saveAndFlush(team));
    }

	private void validateNewUserRequest(UserRequestDto userRequestDto) {

		if (userRequestDto.getCredentials() == null || userRequestDto.getProfile() == null) {
			throw new BadRequestException("Credentials or Profile request is empty or null");
		}

		if (userRequestDto.getCredentials().getUsername() == null || userRequestDto.getCredentials().getPassword() == null || userRequestDto.getProfile().getEmail() == null) {
			throw new BadRequestException("Username, Password, and Email are required fields");
		}

		Optional<User> optionalCredentials = userRepository.findByCredentialsUsername(userRequestDto.getCredentials().getUsername());

		if (optionalCredentials.isPresent()) {
			throw new NotFoundException("Username is taken");
		}

	}

	private Company getCompanyHelper(Long id) {

		Optional<Company> optionalCompany = companyRepository.findById(id);

		if (optionalCompany.isEmpty()) {
			throw new NotFoundException("Company " + id + " does not exist");
		}

		return optionalCompany.get();

	}

    @Override
    public BasicUserDto createUser(Long id, UserRequestDto userRequestDto) {

		validateNewUserRequest(userRequestDto);

		User userToSave = basicUserMapper.requestDtoToEntity(userRequestDto);
		userRepository.saveAndFlush(userToSave);

		Company companyToJoin = getCompanyHelper(id);
		companyToJoin.getEmployees().add(userToSave);
		companyRepository.saveAndFlush(companyToJoin);

		return basicUserMapper.entityToBasicUserDto(userToSave);

    }

}
