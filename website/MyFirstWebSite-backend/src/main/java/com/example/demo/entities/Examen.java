package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Examen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String matiere;
    private Long nombre_exercices;
    private Long nombre_page;
    private String duree_examen;


    @ManyToOne
    @JoinColumn(name = "COURS_ID")
    private Cours cours;


    public Cours getCours() {
        return cours;
    }

    public void setCours(Cours cours) {
        this.cours = cours;
    }

    public Examen(String matiere, Long nombre_exercices, Long nombre_page, String duree_examen) {
        this.matiere = matiere;
        this.nombre_exercices = nombre_exercices;
        this.nombre_page = nombre_page;
        this.duree_examen = duree_examen;
    }

    public Examen() {
    }

    public Long getNombre_exercices() {
        return nombre_exercices;
    }

    public void setNombre_exercices(Long nombre_exercices) {
        this.nombre_exercices = nombre_exercices;
    }

    public Long getNombre_page() {
        return nombre_page;
    }

    public void setNombre_page(Long nombre_page) {
        this.nombre_page = nombre_page;
    }

    public String getDuree_examen() {
        return duree_examen;
    }

    public void setDuree_examen(String duree_examen) {
        this.duree_examen = duree_examen;
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
