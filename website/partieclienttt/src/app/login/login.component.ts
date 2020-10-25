import { Component, OnInit } from '@angular/core';
import Swal from "sweetalert2";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {UtilisateurService} from '../services/utilisateur.service';
import {Utilisateur} from '../models/utilisateur';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  utilisateur = new Utilisateur();
  constructor(private service: AuthentificationService,private servutilisateur: UtilisateurService ,private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ['', Validators.required],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);

    this.service.Onlogin(this.loginForm.value).subscribe(res => {
      console.log(res);
      localStorage.setItem("state", "1")
      if (res == null) {
        Swal.fire(
          'OPPS',
          'login ou mot de passe incorrect',
          'error'
        );
      } else {
        /// localStorage.setItem('admin', JSON.parse(JSON.stringify(res)));
        this.router.navigate(['']);
      }
    });

  }
  addutilisateur(){
  const data ={
    nom : this.utilisateur.nom,
    prenom : this.utilisateur.prenom,
    metier : this.utilisateur.metier,
    login: this.utilisateur.login,
    mot_de_passe : this.utilisateur.mot_de_passe,
    confirme_mot_de_passe: this.utilisateur.confirme_mot_de_passe,
    date_enregistrement: this.utilisateur.date_enregistrement,
    service_demande : this.utilisateur.service_demande


  }
  this.servutilisateur.ajout(data).subscribe(res => {
    console.log(res);
    this.utilisateur = new Utilisateur();
    this.router.navigate([''])
  });

}}
