package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Tps {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String objectif;
    private String materiels;
    private String logiciel;
    private String date;

    @ManyToOne
    @JoinColumn(name = "COURS_ID")
    private Cours cours;

    public Tps(String titre, String objectif, String materiels, String logiciel, String date) {
        this.titre = titre;
        this.objectif = objectif;
        this.materiels = materiels;
        this.logiciel = logiciel;
        this.date = date;
    }

    public Tps() {
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getMateriels() {
        return materiels;
    }

    public void setMateriels(String materiels) {
        this.materiels = materiels;
    }

    public String getLogiciel() {
        return logiciel;
    }

    public void setLogiciel(String logiciel) {
        this.logiciel = logiciel;
    }

    public Cours getCours() {
        return cours;
    }

    public void setCours(Cours cours) {
        this.cours = cours;
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

    public String getObjectif() {
        return objectif;
    }

    public void setObjectif(String objectif) {
        this.objectif = objectif;
    }
}
