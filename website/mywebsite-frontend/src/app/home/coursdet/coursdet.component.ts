import { Component, OnInit } from '@angular/core';
import {CoursService} from "../../services/cours.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-coursdet',
  templateUrl: './coursdet.component.html',
  styleUrls: ['./coursdet.component.css']
})
export class CoursdetComponent implements OnInit {
id;
detailcours;
  constructor(private srvcours: CoursService, private actvroute:ActivatedRoute) {
    this.id=this.actvroute.params['value']['id']
    this.details(this.id)
  }

  ngOnInit() {
  }
  details(id){
    this.srvcours.AfficherDetails(id).subscribe(res => {
      this.detailcours= res;
      console.log(this.detailcours);
    })
  }
}
