import { Component, OnInit } from '@angular/core';
import {Tps} from '../../models/tps';
import {TpsService} from '../../services/tps.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tps',
  templateUrl: './tps.component.html',
  styleUrls: ['./tps.component.css']
})
export class TpsComponent implements OnInit {
  listetps;
  tp = new Tps();
id;
idcat;
  constructor(private srvctps: TpsService) {
    this.alltps();
  }

  ngOnInit() {
  }
  alltps() {
    this.srvctps.AficherList().subscribe(res => {
      this.listetps = res;
      console.log(this.listetps);
    });
  }
  delette(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      this.srvctps.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.alltps();
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
  moodifier(){
    const data ={
      titre : this.tp.titre,
      objectif : this.tp.objectif,
      materiels : this.tp.materiels,
      logiciel : this.tp.logiciel,
      date : this.tp.date,
      cours:this.tp.cours,
    }
    this.srvctps.edit(this.id,this.idcat,data).subscribe(res => {
      this.listetps = res;
      console.log(this.listetps);
      this.alltps()
    });
  }
  reecuperer(id,titre,objectif,materiels,logiciel,date,idcat){
    this.id = id;
    this.tp.titre = titre;
    this.tp.objectif = objectif;
    this.tp.materiels = materiels;
    this.tp.logiciel = logiciel;
    this.tp.date = date;
    this.idcat= idcat;
    console.log(this.id)
  }
}
