import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceOpcionalService implements CanActivate{
  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (localStorage.getItem('token')) {
      return false;
    }
    return true;
  }

  getColors() {
    return [
      { id: 1, name: 'azul' },
      { id: 2, name: 'verde' },
      { id: 3, name: 'naranja' },
      { id: 4, name: 'negro' },
      { id: 5, name: 'blanco' },
    ];
  }

  getTallas() {
    return [
      { id: 1, size: '30' },
      { id: 2, size: '31' },
      { id: 3, size: '32' },
      { id: 4, size: '33' },
      { id: 5, size: '34' },
      { id: 6, size: '35' },
      { id: 7, size: '36' },
      { id: 8, size: '37' },
      { id: 9, size: '38' },
      { id: 10, size: '39' },
      { id: 11, size: '40' },
      { id: 12, size: '41' }
    ];
  }
}
