import { Component, OnInit } from '@angular/core';
import {Contact} from '../../models/contact';
import {ContactService} from '../../services/contact.service';
import {Router} from '@angular/router';
import {UtilisateurService} from '../../services/utilisateur.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  listeutilisateurs;
  idu
  contact = new Contact();
  constructor(private srvcontact : ContactService,private router:Router, private servutilisateur: UtilisateurService) {
    this.allutilisateur();
  }

  ngOnInit() {
  }
  allutilisateur() {
    this.servutilisateur.AficherList().subscribe(res => {
      this.listeutilisateurs = res;
      console.log(this.listeutilisateurs);
    });
  }
  addcontact(){
    const data ={
      email : this.contact.email,
      message : this.contact.message,

    }
    this.srvcontact.ajout(this.idu,data).subscribe(res => {

      console.log(res);
      this.contact = new Contact();
      this.router.navigate(['contact'])
    });

  }
}
