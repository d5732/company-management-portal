package com.cooksys.groupfinal.mappers;

import java.util.Set;
import java.util.List;
import org.mapstruct.Mapper;

import com.cooksys.groupfinal.dtos.CompanyDto;
import com.cooksys.groupfinal.entities.Company;

@Mapper(componentModel = "spring", uses = { TeamMapper.class, BasicUserMapper.class })
public interface CompanyMapper {
	
	CompanyDto entityToDto(Company company);

	Set<CompanyDto> entitiesToDtos(Set<Company> companies);
	
	List<CompanyDto> entitiesListToDtos(List<Company> companies);

}
