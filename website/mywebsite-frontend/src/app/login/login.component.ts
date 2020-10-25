import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private service: AuthentificationService, private fb: FormBuilder, private router: Router) { }

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
      localStorage.setItem("state","1")
      if (res == null) {
        Swal.fire(
          'OPPS',
          'login ou mot de passe incorrect',
          'error'
        );
      } else {

        /// localStorage.setItem('admin', JSON.parse(JSON.stringify(res)));

        this.router.navigate(['home']);

      }

    });

  }

}
