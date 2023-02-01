package com.cooksys.groupfinal.services.impl;

import com.cooksys.groupfinal.dtos.*;
import com.cooksys.groupfinal.entities.*;
import com.cooksys.groupfinal.exceptions.BadRequestException;
import com.cooksys.groupfinal.exceptions.NotFoundException;
import com.cooksys.groupfinal.mappers.*;
import com.cooksys.groupfinal.repositories.CompanyRepository;

import java.sql.Timestamp;

import com.cooksys.groupfinal.repositories.TeamRepository;
import com.cooksys.groupfinal.repositories.UserRepository;
import com.cooksys.groupfinal.services.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;
import com.cooksys.groupfinal.dtos.AnnouncementDto;
import com.cooksys.groupfinal.dtos.CredentialsDto;
import com.cooksys.groupfinal.dtos.FullUserDto;
import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.dtos.CompanyDto;
import com.cooksys.groupfinal.dtos.ProjectDto;
import com.cooksys.groupfinal.dtos.TeamDto;
import com.cooksys.groupfinal.entities.Announcement;
import com.cooksys.groupfinal.entities.Company;
import com.cooksys.groupfinal.entities.Credentials;
import com.cooksys.groupfinal.entities.Project;
import com.cooksys.groupfinal.entities.Team;
import com.cooksys.groupfinal.entities.User;
import com.cooksys.groupfinal.exceptions.BadRequestException;
import com.cooksys.groupfinal.exceptions.NotFoundException;
import com.cooksys.groupfinal.mappers.AnnouncementMapper;
import com.cooksys.groupfinal.mappers.CredentialsMapper;
import com.cooksys.groupfinal.mappers.ProjectMapper;
import com.cooksys.groupfinal.mappers.TeamMapper;
import com.cooksys.groupfinal.mappers.CompanyMapper;
import com.cooksys.groupfinal.mappers.FullUserMapper;
import com.cooksys.groupfinal.mappers.BasicUserMapper;
import com.cooksys.groupfinal.repositories.AnnouncementRepository;
import com.cooksys.groupfinal.repositories.CompanyRepository;
import com.cooksys.groupfinal.repositories.ProjectRepository;
import com.cooksys.groupfinal.repositories.TeamRepository;
import com.cooksys.groupfinal.services.CompanyService;
 
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
	
	private final CompanyRepository companyRepository;
	private final AnnouncementRepository announcementRepository;
	private final ProjectRepository projectRepository;
	private final TeamRepository teamRepository;
	private final UserRepository userRepository;
	private final FullUserMapper fullUserMapper;
	private final BasicUserMapper basicUserMapper;
	private final AnnouncementMapper announcementMapper;
	private final TeamMapper teamMapper;
	private final ProjectMapper projectMapper;
	private final CompanyMapper companyMapper;
	private final TeamWithProjectsMapper teamWithProjectsMapper;
	private final CredentialsMapper credentialsMapper;

	
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

	
	protected Team findTeam(Long id) {
        Optional<Team> team = teamRepository.findById(id);
        if (team.isEmpty()) {
            throw new NotFoundException("A team with the provided id does not exist.");
        }
        return team.get();
    }
	
	@Override
	public Set<FullUserDto> getAllUsers(Long id) {
		Company company = findCompany(id);
		Set<User> allUsers = new HashSet<>();
		company.getEmployees().forEach(allUsers::add);
		return fullUserMapper.entitiesToFullUserDtos(allUsers);
	}
	
	@Override
	public Set<BasicUserDto> getAllActiveUsers(Long id) {
		Company company = findCompany(id);
		Set<User> filteredUsers = new HashSet<>();
		company.getEmployees().forEach(filteredUsers::add);
		filteredUsers.removeIf(user -> !user.isActive());
		return basicUserMapper.entitiesToBasicUserDtos(filteredUsers);
	}
	
	@Override
	public List<CompanyDto> getAllCompanies() {
		return companyMapper.entitiesListToDtos(companyRepository.findAll());
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

    @Override
    public BasicUserDto createUser(Long id, UserRequestDto userRequestDto) {

		validateNewUserRequest(userRequestDto);

		User userToSave = basicUserMapper.requestDtoToEntity(userRequestDto);
		userRepository.saveAndFlush(userToSave);

		Company companyToJoin = findCompany(id);
		companyToJoin.getEmployees().add(userToSave);
		companyRepository.saveAndFlush(companyToJoin);

		return basicUserMapper.entityToBasicUserDto(userToSave);

    }

	@Override
	public AnnouncementDto createAnnouncement(Long id, AnnouncementDto announcementDto) {

 	
		//Credentials credentials = credentialsMapper.dtoToEntity(credentialsDto);
		 		
		if(!announcementDto.getAuthor().isAdmin()) {
			
			throw new BadRequestException("User is not Admin, cannot post announcement.");
		}
		
		Optional<Company> selectedCompany = companyRepository.findById(id);
		
		if(selectedCompany.isEmpty()) {
			
			throw new NotFoundException("Company not found with given id");
		}
		
		if(announcementDto.getMessage().isBlank()) {
			
			throw new BadRequestException("Announcement Message cannot be empty");
		}
		
 		
		Announcement announcementToPost = announcementMapper.dtoToEntity(announcementDto);
		User fetchAuthor = announcementToPost.getAuthor();
		if(fetchAuthor.isAdmin()) {
			
			announcementToPost.setAuthor(fetchAuthor);
			announcementToPost.setTitle(announcementDto.getTitle());
			announcementToPost.setDate(Timestamp.valueOf(LocalDateTime.now()));
 			announcementToPost.setCompany(selectedCompany.get());
			//companyRepository.saveAndFlush(selectedCompany.get());	
 			
			selectedCompany.get().getAnnouncements().add(announcementToPost);


		}
		
				
			 
		return announcementMapper.entityToDto(announcementRepository.saveAndFlush(announcementToPost));  
		
 	}

	@Override
	public ProjectDto updateProject(Long id, Long teamID, ProjectDto projectDto) {


		Optional<Company> selectedCompany = companyRepository.findById(id);
		
		if(selectedCompany.isEmpty()) {
			
			throw new NotFoundException("Company not found with given id");
		}
		
		Optional<Team> selectedTeam = teamRepository.findById(teamID);

		if(selectedTeam.isEmpty()) {
			
			throw new NotFoundException("Team not found with given id");
		}
		
		if(!selectedTeam.get().getCompany().equals(selectedCompany.get())) {
			
			throw new BadRequestException("Specified team doesn't belong to the selected company");
		
		}
		
		if(projectDto.getName().isBlank()) {
			
			throw new BadRequestException("Project Name cannot be empty");
		}
		
		Optional<Project> selectedProject = projectRepository.findById(projectDto.getId());
		
		if(selectedProject.isEmpty()) {
			
			throw new NotFoundException("Project doesn't exist with given id");

		}
	
		Project projectToUpdate = projectMapper.dtoToEntity(projectDto);
//		
//      for future projects
		
//		if(!projectToUpdate.isActive()) {
//			
//			projectToUpdate.setName(projectDto.getName());
//			projectToUpdate.setDescription(projectDto.getDescription());
//		
//			throw new NotFoundException("Project not active.");
//		} //
		
		projectToUpdate.setActive(true);
		projectToUpdate.setTeam(selectedTeam.get());

		return projectMapper.entityToDto(projectRepository.saveAndFlush(projectToUpdate));
		
		
	}

	@Override
	public Set<TeamWithProjectsDto> getAllProjects(Long id) {
		Optional<Company> optionalCompany = companyRepository.findById(id);
		if(optionalCompany.isEmpty()) {
			throw new NotFoundException("No company found with id " + id);
		}
		return teamWithProjectsMapper.entitiesToDtos(optionalCompany.get().getTeams());
	}

}
