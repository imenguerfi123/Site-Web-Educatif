import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/utilisateur/all');
  }
  ajout(data) {

    return this.http.post(environment.BaseUrl + '/utilisateur/ajouter' , data);
  }
}
