import { Component, OnInit } from '@angular/core';
import {UtilisateursService} from "../../services/utilisateurs.service";
import {ActivatedRoute} from "@angular/router";
import {AdminsService} from "../../services/admins.service";

@Component({
  selector: 'app-utilisateurdet',
  templateUrl: './utilisateurdet.component.html',
  styleUrls: ['./utilisateurdet.component.css']
})
export class UtilisateurdetComponent implements OnInit {
  id;
  detailleutilisateur;

  constructor(private srvutilisateur: UtilisateursService, private actvroute: ActivatedRoute, private srvadmin: AdminsService) {
    this.id=this.actvroute.params['value']['id']
    this.details(this.id)
  }

  ngOnInit() {
  }
  details(id){
    this.srvutilisateur.AfficherDetails(id).subscribe(res => {
      this.detailleutilisateur= res;
      console.log(this.detailleutilisateur);

    })
  }
}
