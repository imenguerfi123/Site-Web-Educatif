package com.example.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Utilisateur extends Personne{
    private String service_demande;


    @OneToMany(mappedBy = "utilisateur")
    @JsonIgnore
    private Collection<Contact> contact;

    @ManyToMany(fetch = FetchType.EAGER)
    @JsonIgnore
    private Collection<Commande> commande;

    @OneToMany(mappedBy = "utilisateur")
    @JsonIgnore
    private Collection<Commentaire> commentaires;

    public Collection<Contact> getContact() {
        return contact;
    }

    public void setContact(Collection<Contact> contact) {
        this.contact = contact;
    }

    public Collection<Commande> getCommande() {
        return commande;
    }

    public void setCommande(Collection<Commande> commande) {
        this.commande = commande;
    }

    public Collection<Commentaire> getCommentaires() {
        return commentaires;
    }

    public void setCommentaires(Collection<Commentaire> commentaires) {
        this.commentaires = commentaires;
    }

    public Utilisateur(String nom, String prenom, String metier, String login, String mot_de_passe, String confirme_mot_de_passe, String date_enregistrement, String service_demande) {
        super(nom, prenom, metier, login, mot_de_passe, confirme_mot_de_passe, date_enregistrement);
        this.service_demande = service_demande;
    }

    public Utilisateur() {
    }

    public String getService_demande() {
        return service_demande;
    }

    public void setService_demande(String service_demande) {
        this.service_demande = service_demande;
    }
}
