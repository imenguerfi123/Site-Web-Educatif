import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/contact/all');
  }

  ajout(data) {

    return this.http.post(environment.BaseUrl + '/contact/ajouter', data);
  }
  edit(id, data) {
    return this.http.put(environment.BaseUrl + '/contact/update/' + id, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/contact/delete/' + id);
  }
}
