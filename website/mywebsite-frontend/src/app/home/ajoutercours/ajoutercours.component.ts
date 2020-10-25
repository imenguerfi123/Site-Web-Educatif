import { Component, OnInit } from '@angular/core';
import {Cours} from "../../models/cours";
import {CoursService} from "../../services/cours.service";
import {Router} from "@angular/router";
import {ImagesService} from "../../services/images.service";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-ajoutercours',
  templateUrl: './ajoutercours.component.html',
  styleUrls: ['./ajoutercours.component.css']
})
export class AjoutercoursComponent implements OnInit {
  filesToUpload: Array<File>;
  photo;
  listecategoeies;
  idcat;
  cours = new Cours();
  constructor(private srvcours: CoursService, private router:Router,private  imgsrc:ImagesService, private srvcategories: CategoriesService) {
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
  addcours(){
    const data ={
      matiere : this.cours.matiere,
      reference : this.cours.reference,
      date : this.cours.date,
      description : this.cours.description,
      duree : this.cours.duree,
      nombre_lecon : this.cours.nombre_lecon,
      photo:this.filesToUpload[0].name
    }
    this.srvcours.ajout(this.idcat,data).subscribe(res => {
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest =>{
        console.log(rest)

      })
      console.log(res);
      this.cours = new Cours();
      this.router.navigate(['/home/cours'])
    });

  }
  canccel(){
    this.cours = new Cours();
  }
}
