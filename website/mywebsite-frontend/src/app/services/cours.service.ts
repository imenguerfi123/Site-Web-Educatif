import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) {

  }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/cours/all');
  }

  ajout(id,data) {

    return this.http.post(environment.BaseUrl + '/cours/ajouter/' +id, data);
  }
  edit(id,idc, data) {
    return this.http.put(environment.BaseUrl + '/cours/update/' + id + '/' +idc, data);
  }
  AfficherDetails(id){
    return this.http.get( environment.BaseUrl + '/cours/getcours/'+id);
  }
  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/cours/delete/' + id);
  }
}
