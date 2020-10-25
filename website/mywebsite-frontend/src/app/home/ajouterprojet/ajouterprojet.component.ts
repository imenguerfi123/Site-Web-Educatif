import { Component, OnInit } from '@angular/core';
import {Projet} from "../../models/projet";
import {ProjetsService} from "../../services/projets.service";
import {Router} from "@angular/router";
import {ImagesService} from "../../services/images.service";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-ajouterprojet',
  templateUrl: './ajouterprojet.component.html',
  styleUrls: ['./ajouterprojet.component.css']
})
export class AjouterprojetComponent implements OnInit {
  projet = new Projet();
  filesToUpload: Array<File>;
  photo;
  listecategoeies;
  idcat;
  constructor(private srvcproj: ProjetsService, private router:Router,private  imgsrc:ImagesService, private srvcategories: CategoriesService ) {
    this.photo="choisir une image"
    this.allcategories();
  }

  ngOnInit() {
  }
  recuperFile(file){
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  allcategories() {
    this.srvcategories.AficherList().subscribe(res => {
      this.listecategoeies = res;
      console.log(this.listecategoeies);
    });
  }
  addprojet(){
    const data ={
      titre : this.projet.titre,
      description : this.projet.description,
      logiciel : this.projet.logiciel,
      prix : this.projet.prix,
      date : this.projet.date,
      photo:this.filesToUpload[0].name
    }
    this.srvcproj.ajout(this.idcat,data).subscribe(res => {

      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest =>{
        console.log(rest)

      })
      console.log(res);
      this.projet = new Projet();
      this.router.navigate(['/home/projets'])
    });

  }
  canccel(){
    this.projet = new Projet();
  }
}
