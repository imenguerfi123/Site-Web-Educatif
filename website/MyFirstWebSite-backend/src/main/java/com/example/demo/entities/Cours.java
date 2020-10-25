package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Cours {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matiere;
    private String reference;
    private String description;
    private String duree;
    private String nombre_lecon;
    private String date;
    private String photo;
    @ManyToOne
    @JoinColumn(name = "CAT_ID")
    private Categories ca;

    @OneToMany(mappedBy = "cours")
    @JsonIgnore
    private Collection<Commentaire> commentaires;


    @OneToMany(mappedBy = "cours")
    @JsonIgnore
    private Collection<Tps> tps;

    @OneToMany(mappedBy = "cours")
    @JsonIgnore

    private Collection<Travaux_diriges> travaux_diriges;

    @OneToMany(mappedBy = "cours")
    @JsonIgnore

    private Collection<Examen> examen;

    public Collection<Examen> getExamen() {
        return examen;
    }

    public void setExamen(Collection<Examen> examen) {
        this.examen = examen;
    }

    public Collection<Travaux_diriges> getTravaux_diriges() {
        return travaux_diriges;
    }

    public void setTravaux_diriges(Collection<Travaux_diriges> travaux_diriges) {
        this.travaux_diriges = travaux_diriges;
    }

    public Collection<Tps> getTps() {
        return tps;
    }

    public void setTps(Collection<Tps> tps) {
        this.tps = tps;
    }

    public Categories getCa() {
        return ca;
    }

    public Collection<Commentaire> getCommentaires() {
        return commentaires;
    }

    public void setCommentaires(Collection<Commentaire> commentaires) {
        this.commentaires = commentaires;
    }

    public void setCa(Categories ca) {
        this.ca = ca;
    }

    public Cours(String matiere, String reference, String description, String duree, String nombre_lecon, String date, String photo) {
        this.matiere = matiere;
        this.reference = reference;
        this.description = description;
        this.duree = duree;
        this.nombre_lecon = nombre_lecon;
        this.date = date;
        this.photo = photo;
    }

    public Cours() {
    }

    public String getDuree() {
        return duree;
    }

    public void setDuree(String duree) {
        this.duree = duree;
    }

    public String getNombre_lecon() {
        return nombre_lecon;
    }

    public void setNombre_lecon(String nombre_lecon) {
        this.nombre_lecon = nombre_lecon;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getReference() {
        return reference;
    }

    public void setReference(String reference) {
        this.reference = reference;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMatiere() {
        return matiere;
    }

    public void setMatiere(String matiere) {
        this.matiere = matiere;
    }
}
