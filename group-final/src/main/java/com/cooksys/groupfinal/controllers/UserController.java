package com.cooksys.groupfinal.controllers;

import com.cooksys.groupfinal.dtos.BasicUserDto;
import com.cooksys.groupfinal.dtos.CredentialsDto;
import com.cooksys.groupfinal.dtos.FullUserDto;
import com.cooksys.groupfinal.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/login")
    @CrossOrigin(origins = "*")
    public FullUserDto login(@RequestBody CredentialsDto credentialsDto) {
        return userService.login(credentialsDto);
    }

    @PatchMapping("/{id}")
    @CrossOrigin(origins = "*")
    public BasicUserDto updateUser(@PathVariable Long id, @RequestBody BasicUserDto basicUserDto) {
        return userService.updateUser(id, basicUserDto);
    }

}
