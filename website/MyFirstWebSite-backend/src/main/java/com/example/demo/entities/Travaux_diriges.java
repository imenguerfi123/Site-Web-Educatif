package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Travaux_diriges {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matiere;
    private String chapitre;
    private Long nombre_exercie;
    private String date;

    @ManyToOne
    @JoinColumn(name = "COURS_ID")
    private Cours cours;

    public Travaux_diriges(String matiere, String chapitre, Long nombre_exercie, String date) {
        this.matiere = matiere;
        this.chapitre = chapitre;
        this.nombre_exercie = nombre_exercie;
        this.date = date;
    }

    public Cours getCours() {
        return cours;
    }

    public void setCours(Cours cours) {
        this.cours = cours;
    }

    public Travaux_diriges() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getNombre_exercie() {
        return nombre_exercie;
    }

    public void setNombre_exercie(Long nombre_exercie) {
        this.nombre_exercie = nombre_exercie;
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

    public String getChapitre() {
        return chapitre;
    }

    public void setChapitre(String chapitre) {
        this.chapitre = chapitre;
    }
}
