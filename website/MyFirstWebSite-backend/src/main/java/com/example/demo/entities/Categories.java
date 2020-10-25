package com.example.demo.entities;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;


@Entity
public class Categories {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String domaine;

    @OneToMany(mappedBy = "c")
@JsonIgnore
    private Collection<Projet> projs;

    @OneToMany(mappedBy = "ca")
    @JsonIgnore
    private Collection<Cours> cours;
    @OneToMany(mappedBy = "cat")
    @JsonIgnore
    private Collection<Article> articles;

    public Collection<Cours> getCours() {
        return cours;
    }

    public Collection<Article> getArticles() {
        return articles;
    }

    public void setArticles(Collection<Article> articles) {
        this.articles = articles;
    }

    public void setCours(Collection<Cours> cours) {
        this.cours = cours;
    }

    public Categories(String domaine) {
        this.domaine = domaine;
    }

    public Categories() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDomaine() {
        return domaine;
    }

    public void setDomaine(String domaine) {
        this.domaine = domaine;
    }

    public Collection<Projet> getProjs() {
        return projs;
    }

    public void setProjs(Collection<Projet> projs) {
        this.projs = projs;
    }
}
