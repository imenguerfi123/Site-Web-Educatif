import { Component, OnInit } from '@angular/core';
import {Admin} from '../../models/admin';
import {AdminsService} from '../../services/admins.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
listeadmins;
admin = new Admin();
id;
  constructor(private srvadmin: AdminsService) {
    this.alladmin();
  }

  ngOnInit() {
  }
  alladmin() {
    this.srvadmin.AficherList().subscribe(res => {
      this.listeadmins = res;
      console.log(this.listeadmins);
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
      this.srvadmin.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.alladmin();
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
  modifierr(){
    const data ={
      nom : this.admin.nom,
      prenom : this.admin.prenom,
      metier : this.admin.metier,
      num_tel : this.admin.num_tel,
      adresse : this.admin.adresse,
      login: this.admin.login,
      mot_de_passe: this.admin.mot_de_passe,
      confirme_mot_de_passe: this.admin.confirme_mot_de_passe,
      date_enregistrement: this.admin.date_enregistrement,
      photo : this.admin.photo,

    }
    this.srvadmin.edit(this.id,data).subscribe(res => {
      this.listeadmins = res;
      console.log(this.listeadmins);
      this.alladmin()
    });
  }
  recupererr(photo,id,nom,prenom,metier,num_tel,adresse,login,mot_de_passe, confirme_mot_de_passe,date_enregistrement){
    this.id = id;
    this.admin.nom = nom;
    this.admin.prenom = prenom;
    this.admin.metier = metier;
    this.admin.num_tel = num_tel;
    this.admin.adresse = adresse;
    this.admin.login = login;
    this.admin.mot_de_passe = mot_de_passe;
    this.admin.confirme_mot_de_passe = confirme_mot_de_passe;
    this.admin.date_enregistrement = date_enregistrement;
    this.admin.photo = photo;
    console.log(this.id)
  }
}
