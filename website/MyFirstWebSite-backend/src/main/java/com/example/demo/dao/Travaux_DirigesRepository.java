package com.example.demo.dao;

import com.example.demo.entities.Travaux_diriges;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface Travaux_DirigesRepository extends JpaRepository<Travaux_diriges,Long> {
}
