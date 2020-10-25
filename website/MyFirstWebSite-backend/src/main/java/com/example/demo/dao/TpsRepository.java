package com.example.demo.dao;

import com.example.demo.entities.Tps;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface TpsRepository extends JpaRepository<Tps,Long> {
}
