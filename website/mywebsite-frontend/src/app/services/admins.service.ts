import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http: HttpClient) {

  }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/admin/all');
  }
  AfficherDetails(id){
    return this.http.get( environment.BaseUrl + '/admin/getprofil/'+id);
  }
  ajout(data) {

    return this.http.post(environment.BaseUrl + '/admin/ajouter', data);
  }
  edit(id, data) {
    return this.http.put(environment.BaseUrl + '/admin/update/' + id, data);
  }

  supprimer(id) {
    return this.http.delete(environment.BaseUrl + '/admin/delete/' + id);
  }
  mail(data){
    return this.http.post(environment.BaseUrl + '/admin/sendmail', data);

  }
}
