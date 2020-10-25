import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  constructor(private http: HttpClient) {

  }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/utilisateur/all');
  }
  AfficherDetails(id){
    return this.http.get( environment.BaseUrl + '/utilisateur/getprofil/' + id);
  }
  // ajout(id,data) {
  //
  //   return this.http.post(environment.BaseUrl + '/utilisateur/ajouter/' + id, data);
  // }
  // edit(id,idc, data) {
  //   return this.http.put(environment.BaseUrl + '/utilisateur/update/' + id +'/' +idc, data);
  // }
  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/utilisateur/delete/' + id);
  }
}
