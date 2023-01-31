package com.cooksys.groupfinal.entities;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@NoArgsConstructor
@Data
public class Team {

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String description;

    @ManyToOne
    private Company company;

    @ManyToMany
    @EqualsAndHashCode.Exclude
    private Set<User> users = new HashSet<>();

    @OneToMany(mappedBy = "team")
    @EqualsAndHashCode.Exclude
    private Set<Project> projects = new HashSet<>();

}
