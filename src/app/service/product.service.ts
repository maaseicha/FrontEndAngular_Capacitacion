import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements CanActivate{

  API_URI:string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getProductId(code:string){
    return this.http.get(`${this.API_URI}product/${code}`);
  }

  getProducts(){
    return this.http.get(`${this.API_URI}products`);
  }

  saveProduct(product: Product){
    return this.http.post(`${this.API_URI}product`,product)
  }

  updateProduct(product: Product){
    return this.http.put(`${this.API_URI}product/up`,product)
  }

  deleteProduct(code: string){
    return this.http.delete(`${this.API_URI}product/del/${code}`)
  }
}
