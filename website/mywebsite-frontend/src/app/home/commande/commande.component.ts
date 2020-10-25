import { Component, OnInit } from '@angular/core';
import {Commande} from '../../models/commande';
import {CommandeService} from '../../services/commande.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
listecommandes;
commande = new Commande();
  constructor(private srvcommande: CommandeService) {
    this.allcommandes();
  }

  ngOnInit() {
  }
  allcommandes() {
    this.srvcommande.AficherList().subscribe(res => {
      this.listecommandes = res;
      console.log(this.listecommandes);
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
      this.srvcommande.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allcommandes();
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
