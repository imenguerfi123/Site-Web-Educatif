import { Component, OnInit } from '@angular/core';
import {Cours} from '../../models/cours';
import {CoursService} from '../../services/cours.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  listecours;
  cours = new Cours();
id;
idcat;
  constructor(private srvcours: CoursService) {
    this.allcours();
  }

  ngOnInit() {
  }
  allcours() {
    this.srvcours.AficherList().subscribe(res => {
      this.listecours = res;
      console.log(this.listecours);
    });
  }
  delete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvcours.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allcours();
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
  modiffier(){
    const data ={
      matiere : this.cours.matiere,
      reference : this.cours.reference,
      date : this.cours.date,
      description : this.cours.description,
      duree : this.cours.duree,
      nombre_lecon : this.cours.nombre_lecon,
      photo : this.cours.photo,
      categories : this.cours.categories,
    }
    this.srvcours.edit(this.id,this.idcat,data).subscribe(res => {
      this.listecours = res;
      console.log(this.listecours);
      this.allcours()
    });
  }
  recupperer(photo,id,matiere,reference,date,description,duree,nombre_lecon,idcat){
    this.id = id;
    this.cours.matiere = matiere;
    this.cours.reference = reference;
    this.cours.date = date;
    this.cours.photo = photo;
    this.cours.description = description;
    this.cours.duree = duree;
    this.cours.nombre_lecon = nombre_lecon;
    this.idcat= idcat;
    console.log(this.idcat)
  }
}
