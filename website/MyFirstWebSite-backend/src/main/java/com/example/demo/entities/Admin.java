package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.Collection;

@Entity
public class Admin extends Personne
{
   private String photo;
   private String num_tel;
   private String adresse;

    public Admin(String nom, String prenom, String metier, String login, String mot_de_passe, String confirme_mot_de_passe, String date_enregistrement, String photo, String num_tel, String adresse) {
        super(nom, prenom, metier, login, mot_de_passe, confirme_mot_de_passe, date_enregistrement);
        this.photo = photo;
        this.num_tel = num_tel;
        this.adresse = adresse;
    }

    public Admin() {
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public String getNum_tel() {
        return num_tel;
    }

    public void setNum_tel(String num_tel) {
        this.num_tel = num_tel;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }
}
