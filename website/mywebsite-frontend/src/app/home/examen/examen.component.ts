import { Component, OnInit } from '@angular/core';
import {Examen} from '../../models/examen';
import {ExamenService} from '../../services/examen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  listeexamens;
  examen = new Examen();
  id;
  idc;
  constructor(private srvexamen: ExamenService) {
    this.allexamens();
  }

  ngOnInit() {
  }
  allexamens() {
    this.srvexamen.AficherList().subscribe(res => {
      this.listeexamens = res;
      console.log(this.listeexamens);
    });
  }
  deeleete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvexamen.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allexamens();
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
  modifiiier(){
    const data ={
      matiere : this.examen.matiere,
      nombre_exercices : this.examen.nombre_exercices,
      nombre_page : this.examen.nombre_page,
      duree_examen : this.examen.duree_examen,
      cours:this.examen.cours,
    }
    console.log(data)
     this.srvexamen.edit(this.id,this.idc,data).subscribe(res => {
      console.log(res);
      this.allexamens()
    });
  }
  recuppperer(id,matiere,nombre_exercices,nombre_page,duree_examen,idc){
    this.id = id;
    this.examen.matiere = matiere;
    this.examen.nombre_exercices = nombre_exercices;
    this.examen.nombre_page = nombre_page;
    this.examen.duree_examen = duree_examen;
    this.idc= idc;
    console.log(this.idc)
  }

}
