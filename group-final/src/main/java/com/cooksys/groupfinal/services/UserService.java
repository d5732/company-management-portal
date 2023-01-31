package com.cooksys.groupfinal.services;

import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.dtos.CredentialsDto;
import com.cooksys.groupfinal.dtos.FullUserDto;

public interface UserService {

	FullUserDto login(CredentialsDto credentialsDto);

	BasicUserDto updateUser(Long id, BasicUserDto basicUserDto);

}
