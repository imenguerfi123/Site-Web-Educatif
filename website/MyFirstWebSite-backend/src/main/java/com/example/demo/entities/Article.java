package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String titre;
    private String auteur;
    private String reference;
    private String date_publication;


    @ManyToOne
    @JoinColumn(name = "CAT_ID")
    private Categories cat;

    public Categories getCat() {
        return cat;
    }

    public void setCat(Categories cat) {
        this.cat = cat;
    }


    public Article(String titre, String auteur, String reference, String date_publication) {
        this.titre = titre;
        this.auteur = auteur;
        this.reference = reference;
        this.date_publication = date_publication;
    }

    public Article() {
    }

    public String getDate_publication() {
        return date_publication;
    }

    public void setDate_publication(String date_publication) {
        this.date_publication = date_publication;
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

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }
}
