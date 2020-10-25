package com.example.demo.dao;

import com.example.demo.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public interface AdminRepository extends JpaRepository<Admin,Long> {

    @Query("select a from  Admin a where a.login= :login and a.mot_de_passe=:mot_de_passe")
    Admin login(@Param("login")String login, @Param("mot_de_passe")String mot_de_passe);
}
