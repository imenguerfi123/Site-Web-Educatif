import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }
  Onlogin(data) {
    return this.http.post(environment.BaseUrl + '/admin/connexion', data);
  }
}
