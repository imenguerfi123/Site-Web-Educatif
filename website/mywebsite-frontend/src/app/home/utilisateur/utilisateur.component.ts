import { Component, OnInit } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur";
import {UtilisateursService} from "../../services/utilisateurs.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {
listeutilisateurs;
utilisateur = new Utilisateur();
id;
  constructor(private srvutilisateur: UtilisateursService) {
    this.allutilisateur();
  }

  ngOnInit() {
  }
  allutilisateur() {
    this.srvutilisateur.AficherList().subscribe(res => {
      this.listeutilisateurs = res;
      console.log(this.listeutilisateurs);
    });
  }
  delete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvutilisateur.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allutilisateur();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  // modiifier(){
  //   const data ={
  //     nom : this.utilisateur.nom,
  //     prenom : this.utilisateur.prenom,
  //     login: this.utilisateur.login,
  //     mot_de_passe: this.utilisateur.mot_de_passe,
  //     confirme_mot_de_passe: this.utilisateur.confirme_mot_de_passe,
  //     date_enregistrement: this.utilisateur.date_enregistrement,
  //     metier : this.utilisateur.metier,
  //     service_demande : this.utilisateur.service_demande
  //
  //   }
  //   this.srvutilisateur.edit(this.id,data).subscribe(res => {
  //     this.listeutilisateurs = res;
  //     console.log(this.listeutilisateurs);
  //     this.allutilisateur()
  //   });
  // }
  // recupereer(id,nom,prenom,login,mot_de_passe, confirme_mot_de_passe,date_enregistrement,metier,service_demande){
  //   this.id = id;
  //   this.utilisateur.nom = nom;
  //   this.utilisateur.prenom = prenom;
  //   this.utilisateur.login = login;
  //   this.utilisateur.mot_de_passe = mot_de_passe;
  //   this.utilisateur.confirme_mot_de_passe = confirme_mot_de_passe;
  //   this.utilisateur.date_enregistrement = date_enregistrement;
  //   this.utilisateur.metier = metier;
  //   this.utilisateur.service_demande = service_demande;
  //   console.log(this.id)
  // }

}
