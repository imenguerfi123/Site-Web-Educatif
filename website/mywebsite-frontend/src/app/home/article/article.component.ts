import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
listearticles;
article = new Article();
id;
idcat;
  constructor(private srvcarticle: ArticleService) {
    this.allarticles();
  }

  ngOnInit() {
  }
  allarticles() {
    this.srvcarticle.AficherList().subscribe(res => {
      this.listearticles = res;
      console.log(this.listearticles);
    });
  }
  deletee(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvcarticle.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allarticles();
      });
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  }
  moddiifier(){
    const data ={
      titre : this.article.titre,
      auteur : this.article.auteur,
      reference : this.article.reference,
      date_publication : this.article.date_publication,
      categories : this.article.categories,
    }
    this.srvcarticle.edit(this.id,this.idcat,data).subscribe(res => {
      this.listearticles = res;
      console.log(this.listearticles);
      this.allarticles()
    });
  }
  reccupperer(id,titre,auteur,reference,date_publication,idcat){
    this.id = id;
    this.article.titre = titre;
    this.article.auteur = auteur;
    this.article.reference = reference;
    this.article.date_publication = date_publication;
    this.idcat= idcat;
    console.log(this.id)
  }

}
