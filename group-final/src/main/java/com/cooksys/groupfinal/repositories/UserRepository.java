package com.cooksys.groupfinal.repositories;

import com.cooksys.groupfinal.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByCredentialsUsernameAndActiveTrue(String username);

    Optional<User> findByIdAndActiveTrue(Long id);

	Optional<User> findByCredentialsUsername(String username);

}