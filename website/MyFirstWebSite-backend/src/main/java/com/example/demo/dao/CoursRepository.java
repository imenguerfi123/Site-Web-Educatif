package com.example.demo.dao;

import com.example.demo.entities.Cours;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CoursRepository extends JpaRepository<Cours,Long> {
}
