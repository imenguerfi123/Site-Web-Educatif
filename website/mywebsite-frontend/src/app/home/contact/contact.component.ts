import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
listecontact;
  contact = new Contact();
  constructor(private servcntct: ContactService) {
    this.allcontacts();
  }

  ngOnInit() {
  }
  allcontacts() {
    this.servcntct.AficherList().subscribe(res => {
      this.listecontact = res;
      console.log(this.listecontact);
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
      this.servcntct.supprimer(id).subscribe( rest => {
        console.log((rest));
        this.allcontacts();
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
