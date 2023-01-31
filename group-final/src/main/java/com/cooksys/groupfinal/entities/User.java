package com.cooksys.groupfinal.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user_table")
@NoArgsConstructor
@Data
public class User {

    @Id
    @GeneratedValue
    private Long id;

  @Embedded
  private Credentials credentials;
	
  @Embedded
  private Profile profile;
	
	private boolean active = true;
	
	private boolean admin;
	
	private String status = "PENDING";
	
	@OneToMany(mappedBy = "author")
	@EqualsAndHashCode.Exclude
	private Set<Announcement> announcements = new HashSet<>();
	
	@ManyToMany(mappedBy = "employees")
	@EqualsAndHashCode.Exclude
	private Set<Company> companies = new HashSet<>();
	
	@ManyToMany(mappedBy = "users")
	@EqualsAndHashCode.Exclude
	private Set<Team> teams = new HashSet<>();

}
