import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article.service";
import {Router} from "@angular/router";
import {Admin} from "../../models/admin";
import {CategoriesService} from "../../services/categories.service";

@Component({
  selector: 'app-ajouterarticle',
  templateUrl: './ajouterarticle.component.html',
  styleUrls: ['./ajouterarticle.component.css']
})
export class AjouterarticleComponent implements OnInit {
  listearticles;
  listecategoeies;
  idcat;
  article = new Article();
  constructor(private srvcarticle: ArticleService,private router:Router, private srvcategories: CategoriesService) {
    this.allcategories();
  }

  ngOnInit() {
  }
  allcategories() {
    this.srvcategories.AficherList().subscribe(res => {
      this.listecategoeies = res;
      console.log(this.listecategoeies);
    });
  }
  addarticle(){
    const data ={
      titre : this.article.titre,
      auteur : this.article.auteur,
      reference: this.article.reference,
      date_publication : this.article.date_publication
    }
    this.srvcarticle.ajout(this.idcat,data).subscribe(res => {
      console.log(res);
      this.article = new Article();
      this.router.navigate(['/home/article'])
    });

  }
  canccel(){
    this.article = new Article();
  }
}
