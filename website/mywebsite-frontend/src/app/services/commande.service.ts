import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  AficherList() {
    return this.http.get( environment.BaseUrl + '/commande/all');
  }

  ajout(data) {

    return this.http.post(environment.BaseUrl + '/commande/ajouter', data);
  }
  edit(id, data) {
    return this.http.put(environment.BaseUrl + '/commande/update/' + id, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/commande/delete/' + id);
  }
}
