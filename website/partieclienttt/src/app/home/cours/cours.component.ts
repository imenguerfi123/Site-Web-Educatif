import { Component, OnInit } from '@angular/core';
import {Cours} from '../../models/cours';
import {CoursService} from '../../services/cours.service';
import {CategoriesService} from '../../services/categories.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  listecours;
  listecategoeies;
  cours = new Cours();
  id;
  constructor(private srvcours: CoursService, private srvcategories: CategoriesService) {
    this.allcours();
    this.allcategories();
  }

  ngOnInit() {
  }
  allcours() {
    this.srvcours.AficherList().subscribe(res => {
      this.listecours = res;
      console.log(this.listecours);
    });
  }
  allcategories() {
    this.srvcategories.AficherList().subscribe(res => {
      this.listecategoeies = res;
      console.log(this.listecategoeies);
    });
  }
}
