import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjetsService {

  constructor(private http: HttpClient) {

  }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/projets/all');
  }
  AfficherDetails(id){
    return this.http.get( environment.BaseUrl + '/projets/getprojet/' +id);
  }
  ajout(id,data) {

    return this.http.post(environment.BaseUrl + '/projets/ajouter/' +id, data);
  }
  edit(id,idc, data) {
    return this.http.put(environment.BaseUrl + '/projets/update/' + id +'/'+idc, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/projets/delete/' + id);
  }

}
