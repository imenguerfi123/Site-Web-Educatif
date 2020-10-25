package com.example.demo.dao;

import com.example.demo.entities.Categories;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CategoriesRepository extends JpaRepository<Categories,Long> {
}
