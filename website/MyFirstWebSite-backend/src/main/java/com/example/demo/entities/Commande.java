package com.example.demo.entities;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Commande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String date_commande;
    private String description;
/*
    @JoinTable(name = "LIGNE_COMMANDE",joinColumns=@JoinColumn(name = "COMMD_ID"), inverseJoinColumns=@JoinColumn(name = "PROD_ID"))
*/
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Projet> p;

    public Collection<Projet> getP() {
        return p;
    }

    public void setP(Collection<Projet> p) {
        this.p = p;
    }

    public Commande(String date_commande, String description) {
        this.date_commande = date_commande;
        this.description = description;
    }

    public Commande() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDate_commande() {
        return date_commande;
    }

    public void setDate_commande(String date_commande) {
        this.date_commande = date_commande;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
