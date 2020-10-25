import { Component, OnInit } from '@angular/core';
import {Cours} from "../../models/cours";
import {Examen} from "../../models/examen";
import {ExamenService} from "../../services/examen.service";
import {Router} from "@angular/router";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-ajouterexamen',
  templateUrl: './ajouterexamen.component.html',
  styleUrls: ['./ajouterexamen.component.css']
})
export class AjouterexamenComponent implements OnInit {
  listecours;
  idco;
  examen = new Examen();
  constructor(private srvexamen: ExamenService, private router:Router, private srvcours: CoursService) {
    this.allcours();
  }

  ngOnInit() {
  }
  allcours(){
    this.srvcours.AficherList().subscribe(res => {
      this.listecours = res;
      console.log(this.listecours);
    });
  }
  addexamen(){
    const data ={
      matiere : this.examen.matiere,
      nombre_exercices: this.examen.nombre_exercices,
      nombre_page: this.examen.nombre_page,
      duree_examen : this.examen.duree_examen
    }
    this.srvexamen.ajout(this.idco,data).subscribe(res => {
      console.log(res);
      this.examen = new Examen();
      this.router.navigate(['/home/examen'])
    });
  }
  canccel(){
    this.examen = new Examen();
  }
}
