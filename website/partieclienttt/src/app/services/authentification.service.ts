import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  Onlogin(data) {
    return this.http.post(environment.BaseUrl + '/utilisateur/connexion', data);
  }
}
