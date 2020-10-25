package com.example.demo.dao;

import com.example.demo.entities.Commentaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface CommentaireRepository extends JpaRepository<Commentaire,Long> {
}
