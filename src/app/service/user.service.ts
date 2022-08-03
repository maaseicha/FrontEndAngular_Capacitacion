import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../Model/Login';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI:string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getToken(login:Login){
    return this.http.post(`${this.API_URI}login`,login);
  }

  getPedidosByPerson(id:number){
    return this.http.get(`${this.API_URI}person?id=${id}`);
  }
}
