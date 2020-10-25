import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/categories/all');
  }

  ajout(data) {

    return this.http.post(environment.BaseUrl + '/categories/ajouter', data);
  }
  edit(id, data) {
    return this.http.put(environment.BaseUrl + '/categories/update/' + id, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/categories/delete/' + id);
  }
}
