import { Component, OnInit } from '@angular/core';
import {TDs} from '../../models/tds';
import {TDsService} from '../../services/tds.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.css']
})
export class TDsComponent implements OnInit {
  listetds;
  td = new TDs();
id;
idco;
  constructor(private srvctds: TDsService) {
    this.alltds();
  }

  ngOnInit() {
  }
  alltds() {
    this.srvctds.AficherList().subscribe(res => {
      this.listetds = res;
      console.log(this.listetds);
    });
  }
  dellete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvctds.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.alltds();
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
  moddifier(){
    const data ={
      matiere : this.td.matiere,
      chapitre : this.td.chapitre,
      nombre_exercice : this.td.nombre_exercie,
      date : this.td.date,
      cours:this.td.cours,
    }
    this.srvctds.edit(this.id,this.idco,data).subscribe(res => {
      this.listetds = res;
      console.log(this
      .listetds);
      this.alltds()
    });
  }
  reccuperer(id,matiere,chapitre,nombre_exercice,date,idco){
    this.id = id;
    this.td.matiere = matiere;
    this.td.chapitre = chapitre;
    this.td.nombre_exercie = nombre_exercice;
    this.td.date = date;
    this.idco= idco;
    console.log(this.id)
  }

}
