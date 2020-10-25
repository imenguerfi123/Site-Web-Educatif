package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;


@Entity
public class Projet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String description;
    private String logiciel;
    private String prix;
    private String date;
    private String photo;

@ManyToOne
@JoinColumn(name = "CAT_ID")
private Categories c;

@OneToMany(mappedBy = "projet")
@JsonIgnore
private Collection<Commentaire> commentaires;


    public Projet(String titre, String description, String logiciel, String prix, String date, String photo) {
        this.titre = titre;
        this.description = description;
        this.logiciel = logiciel;
        this.prix = prix;
        this.date = date;
        this.photo = photo;
    }

    public Projet() {
    }

    public void setPrix(String prix) {
        this.prix = prix;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Collection<Commentaire> getCommentaires() {
        return commentaires;
    }

    public void setCommentaires(Collection<Commentaire> commentaires) {
        this.commentaires = commentaires;
    }

    public Categories getC() {
        return c;
    }

    public void setC(Categories c) {
        this.c = c;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLogiciel() {
        return logiciel;
    }

    public void setLogiciel(String logiciel) {
        this.logiciel = logiciel;
    }

}
