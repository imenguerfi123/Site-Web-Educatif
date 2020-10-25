import { Component, OnInit } from '@angular/core';
import {TpsService} from "../../services/tps.service";
import {Tps} from "../../models/tps";
import {Router} from "@angular/router";
import {CoursService} from "../../services/cours.service";

@Component({
  selector: 'app-ajoutertp',
  templateUrl: './ajoutertp.component.html',
  styleUrls: ['./ajoutertp.component.css']
})
export class AjoutertpComponent implements OnInit {
  listecours;
  idco;
  tp = new Tps();
  constructor(private srvctps: TpsService, private router:Router, private srvcours: CoursService) {
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
  addtps(){
    const data ={
      titre: this.tp.titre,
      objectif : this.tp.objectif,
      materiels : this.tp.materiels,
      logiciel : this.tp.logiciel,
      date : this.tp.date
    }
    this.srvctps.ajout(this.idco,data).subscribe(res => {
      console.log(res);
      this.tp = new Tps();
      this.router.navigate(['/home/tps'])
    });
  }
  canccel(){
    this.tp = new Tps();
  }
}
