import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {

  }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/article/all');
  }

  ajout(id,data) {

    return this.http.post(environment.BaseUrl + '/article/ajouter/'+ id, data);
  }
  edit(id,idc, data) {
    return this.http.put(environment.BaseUrl + '/article/update/' + id +'/'+ idc, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/article/delete/' + id);
  }
}
