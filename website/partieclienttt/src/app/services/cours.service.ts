import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }
  AficherList() {
    return this.http.get( environment.BaseUrl + '/cours/all');
  }
  AfficherDetails(id){
    return this.http.get( environment.BaseUrl + '/cours/getcours/'+id);
  }
}
