package com.example.demo.entities;

import javax.persistence.*;


@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class Personne {
    @Id
    @GeneratedValue(strategy = GenerationType.TABLE)
    private Long  id;
    private String nom;
    private String prenom;
    private String metier;
    private String login;
    private String mot_de_passe;
    private String confirme_mot_de_passe;
    private  String date_enregistrement;

    public Personne(String nom, String prenom, String metier, String login, String mot_de_passe, String confirme_mot_de_passe, String date_enregistrement) {
        this.nom = nom;
        this.prenom = prenom;
        this.metier = metier;
        this.login = login;
        this.mot_de_passe = mot_de_passe;
        this.confirme_mot_de_passe = confirme_mot_de_passe;
        this.date_enregistrement = date_enregistrement;
    }

    public Personne() {
    }

    public String getConfirme_mot_de_passe() {
        return confirme_mot_de_passe;
    }

    public void setConfirme_mot_de_passe(String confirme_mot_de_passe) {
        this.confirme_mot_de_passe = confirme_mot_de_passe;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getMot_de_passe() {
        return mot_de_passe;
    }

    public String getMetier() {
        return metier;
    }

    public void setMetier(String metier) {
        this.metier = metier;
    }

    public void setMot_de_passe(String mot_de_passe) {
        this.mot_de_passe = mot_de_passe;
    }

    public String getDate_enregistrement() {
        return date_enregistrement;
    }

    public void setDate_enregistrement(String date_enregistrement) {
        this.date_enregistrement = date_enregistrement;
    }
}
