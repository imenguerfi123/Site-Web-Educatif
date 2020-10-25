import { Component, OnInit } from '@angular/core';
import {ProjetsService} from "../../services/projets.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-projdet',
  templateUrl: './projdet.component.html',
  styleUrls: ['./projdet.component.css']
})
export class ProjdetComponent implements OnInit {
  id;
  detailleprojet;
  constructor(private srvcproj: ProjetsService, private actvroute:ActivatedRoute) {
    this.id=this.actvroute.params['value']['id']
    this.details(this.id)
  }
  ngOnInit() {
  }
  details(id){
    this.srvcproj.AfficherDetails(id).subscribe(res => {
      this.detailleprojet= res;
      console.log(this.detailleprojet);
    })
  }
}
