package com.example.demo.entities;

import javax.persistence.*;

@Entity
public class LigneCommande {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int quantite_commande;
@ManyToOne
@JoinColumn(name = "IDProjet")
private Projet projet;

@ManyToOne
@JoinColumn(name = "IDcommande")
private Commande commande;

    public LigneCommande(int quantite_commande) {
        this.quantite_commande = quantite_commande;
    }

    public LigneCommande() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantite_commande() {
        return quantite_commande;
    }

    public void setQuantite_commande(int quantite_commande) {
        this.quantite_commande = quantite_commande;
    }

}
