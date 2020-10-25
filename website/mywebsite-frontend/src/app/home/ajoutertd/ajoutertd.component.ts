import { Component, OnInit } from '@angular/core';
import {TDs} from "../../models/tds";
import {TDsService} from "../../services/tds.service";
import {Router} from "@angular/router";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-ajoutertd',
  templateUrl: './ajoutertd.component.html',
  styleUrls: ['./ajoutertd.component.css']
})
export class AjoutertdComponent implements OnInit {
  listecours;
  idco;
tds = new TDs();
  constructor(private srvctds: TDsService, private router:Router, private srvcours: CoursService) {
  this.allcours();
}

  ngOnInit(){
  }
allcours(){
  this.srvcours.AficherList().subscribe(res => {
    this.listecours = res;
    console.log(this.listecours);
  });
}
  addtds(){
    const data ={
      matiere : this.tds.matiere,
      chapitre : this.tds.chapitre,
      nombre_exercice : this.tds.nombre_exercie,
      date : this.tds.date
    }
    this.srvctds.ajout(this.idco,data).subscribe(res => {
      console.log(res);
      this.tds = new TDs();
      this.router.navigate(['/home/td'])
    });

  }
  canccel(){
    this.tds = new TDs();
  }
}
