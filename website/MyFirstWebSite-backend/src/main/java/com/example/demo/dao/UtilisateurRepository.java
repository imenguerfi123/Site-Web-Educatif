package com.example.demo.dao;


import com.example.demo.entities.Utilisateur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface UtilisateurRepository extends JpaRepository<Utilisateur,Long> {

    @Query("select u from  Utilisateur u where u.login= :login and u.mot_de_passe=:mot_de_passe")
    Utilisateur login(@Param("login")String login, @Param("mot_de_passe")String mot_de_passe);
}
