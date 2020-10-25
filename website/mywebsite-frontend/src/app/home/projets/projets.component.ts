import { Component, OnInit } from '@angular/core';
import {ProjetsService} from '../../services/projets.service';
import {Projet} from '../../models/projet';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.css']
})
export class ProjetsComponent implements OnInit {

  listeprojets;
  projet = new Projet();
  id;
  idcat;
  constructor(private srvcproj: ProjetsService) {
    this.allprojet();
  }

  ngOnInit() {
  }
  allprojet() {
    this.srvcproj.AficherList().subscribe(res => {
      this.listeprojets = res;
      console.log(this.listeprojets);
    });
  }
deleete(id) {
  Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    this.srvcproj.supprimer(id).subscribe( rest => {
      console.log((rest));
      this.allprojet();
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
  modifier(){
    const data ={
      titre : this.projet.titre,
      logiciel : this.projet.logiciel,
      description : this.projet.description,
      prix : this.projet.prix,
      date : this.projet.date,
      photo : this.projet.photo,
      categories : this.projet.categories,
    }
    this.srvcproj.edit(this.id,this.idcat,data).subscribe(res => {
      this.listeprojets = res;
      console.log(this.listeprojets);
      this.allprojet()
    });
  }
  recuperer(photo,id,titre,logiciel,description,prix,date,idcat){
    this.id = id;
    this.projet.titre = titre;
    this.projet.logiciel = logiciel;
    this.projet.description = description;
    this.projet.prix = prix;
    this.projet.date = date;
    this.projet.photo = photo;
    this.idcat= idcat;
    console.log(this.id)
  }

}
