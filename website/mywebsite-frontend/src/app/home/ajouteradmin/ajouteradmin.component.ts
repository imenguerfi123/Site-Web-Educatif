import { Component, OnInit } from '@angular/core';
import {Admin} from "../../models/admin";
import {AdminsService} from "../../services/admins.service";
import {Router} from "@angular/router";
import {ImagesService} from "../../services/images.service";


@Component({
  selector: 'app-ajouteradmin',
  templateUrl: './ajouteradmin.component.html',
  styleUrls: ['./ajouteradmin.component.css']
})
export class AjouteradminComponent implements OnInit {
  listeadmins;
  filesToUpload: Array<File>;
  photo;
  admin = new Admin();
  constructor(private srvadmin: AdminsService, private router: Router, private imgsrc:ImagesService) {
    this.photo="Choisir Une Image"

  }

  ngOnInit() {
  }
  recuperFile(file){
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  addadmin(){
    const data ={
      nom : this.admin.nom,
      prenom : this.admin.prenom,
      metier : this.admin.metier,
      num_tel : this.admin.num_tel,
      adresse : this.admin.adresse,
      login: this.admin.login,
      mot_de_passe : this.admin.mot_de_passe,
      confirme_mot_de_passe: this.admin.confirme_mot_de_passe,
      date_enregistrement: this.admin.date_enregistrement,
      photo:this.filesToUpload[0].name

    }
    this.srvadmin.ajout(data).subscribe(res => {
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest =>{
        console.log(rest)

      })
      console.log(res);
      this.admin = new Admin();
      this.router.navigate(['/home/admin'])
    });

  }
  canccel(){
    this.admin = new Admin();
  }
}
