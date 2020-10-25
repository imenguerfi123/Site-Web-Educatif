import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TDsService {

  constructor(private http: HttpClient) { }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/travaux/all');
  }
  AfficherDetails(id){
    return this.http.get( environment.BaseUrl + '/travaux/getprojet');
  }
  ajout(id,data) {

    return this.http.post(environment.BaseUrl + '/travaux/ajouter/' + id, data);
  }
  edit(id,idc, data) {
    return this.http.put(environment.BaseUrl + '/travaux/update/' + id +'/'+ idc, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/travaux/delete/' + id);
  }

}
