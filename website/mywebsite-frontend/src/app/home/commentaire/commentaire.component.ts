import { Component, OnInit } from '@angular/core';
import {Commentaire} from "../../models/commentaire";
import {CommentaireService} from "../../services/commentaire.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  listecmmentaire;
  commentaire= new Commentaire();
  id;
  constructor(private  srvcommentaire: CommentaireService) {
    this.allcommentaire();
  }

  ngOnInit() {
  }
  allcommentaire() {
    this.srvcommentaire.AficherList().subscribe(res => {
      this. listecmmentaire = res;
      console.log(this. listecmmentaire);
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
      this.srvcommentaire.supprimer(id).subscribe( rest => {
        console.log((rest));
        this. allcommentaire();
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

}
