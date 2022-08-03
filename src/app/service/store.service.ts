import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  API_URI:string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProducts(gender: string, talla: string, color: string) {
    if (gender.length > 0 && talla.length > 0 && color.length > 0)
      return this.http.get(`${this.API_URI}catalogo?genero=${gender}&talla=${talla}&color=${color}`);
    if (gender.length > 0 && talla.length > 0)
      return this.http.get(`${this.API_URI}catalogo?genero=${gender}&talla=${talla}`);
    if (gender.length > 0 && color.length > 0)
      return this.http.get(`${this.API_URI}catalogo?genero=${gender}&color=${color}`);   
    if (talla.length > 0 && color.length > 0)
      return this.http.get(`${this.API_URI}catalogo?talla=${talla}&color=${color}`);
    if (gender.length > 0)
      return this.http.get(`${this.API_URI}catalogo?genero=${gender}`);
    if (talla.length > 0)
      return this.http.get(`${this.API_URI}catalogo?talla=${talla}`);
    if (color.length > 0)
      return this.http.get(`${this.API_URI}catalogo?color=${color}`);
    return this.http.get(`${this.API_URI}catalogo`);
  }

  getProductsHome() {
    return this.http.get(`${this.API_URI}catalogo?page=0&size=8&order=desc`);
  }

  carrito(code: string, amount: number){
    return this.http.get(`${this.API_URI}carrito?codeShoe=${code}&amount=${amount}`);
  }

  getCarrito(){
    return this.http.get(`${this.API_URI}carrito/list`);
  }

  buy(id:number){
    return this.http.get(`${this.API_URI}buy?codePerson=${id}`);
  }
}
