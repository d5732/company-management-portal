package com.cooksys.groupfinal.repositories;

import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cooksys.groupfinal.entities.Announcement;
import com.cooksys.groupfinal.entities.Company;

import java.util.Optional;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Long> {


//	Optional<Company> findByIdAndDeletedFalse(Long id);
	
//	Set<Announcement> findAllByDeletedFalse();
}