import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) { }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/commentaire/all');
  }

  ajout(id,idu,data) {

    return this.http.post(environment.BaseUrl + '/commentaire/ajoutercomproj/' + id + '/' +idu, data);
  }
  ajoutt(id,idu,data) {

    return this.http.post(environment.BaseUrl + '/commentaire/ajoutercomcours/'+ id + '/' +idu, data);
  }
  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/commentaire/delete/' + id);
  }
}
