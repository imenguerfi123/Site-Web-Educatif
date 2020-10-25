import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../services/categories.service";
import {Categories} from "../../models/categories";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajoutercategories',
  templateUrl: './ajoutercategories.component.html',
  styleUrls: ['./ajoutercategories.component.css']
})
export class AjoutercategoriesComponent implements OnInit {
  listecategoeies;
  categorie = new Categories();

  constructor(private srvcategories: CategoriesService,private router:Router) { }

  ngOnInit() {
  }

  addcategories(){
     const data ={
       domaine : this.categorie.domaine
     }
    this.srvcategories.ajout(data).subscribe(res => {
      console.log(res);
      this.categorie = new Categories();
      this.router.navigate(['/home/categories'])
    });

  }
  canccel(){
    this.categorie = new Categories();
  }
}
