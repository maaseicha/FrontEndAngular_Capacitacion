import { Response } from './../../Model/Response';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';
import { ToastService } from 'src/app/service/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  products: Response;
  response: Response;
  datos: any;
  subtotal: number = 0;
  cantidadCarrito: number = 1;
  idUser:number | string | null = sessionStorage.getItem('userId');
  constructor(private routerLink:Router,private toastService: ToastService,private storeService: StoreService) {
    this.products = {
      message: '',
      code: '',
      status: true,
      data: [],
    };
    this.response = this.products;
  }

  ngOnInit(): void {
    this.storeService.getCarrito().subscribe(
      (res) => {
        this.response = res as Response;
        this.datos = this.response.data;
        for (let i = 0; i < this.datos.length; i++) {
          this.subtotal += (this.datos[i].stock * this.datos[i].price);
        }
      },
      (err) => {
        this.response = err.error;
        this.datos = err.error.data;
      }
    );
    console.log(this.idUser)
  }

  comprar(){
    let id:number;
    if (this.idUser != null) {
      id = +this.idUser;  
    }else{
      id = 0;
    }
    this.storeService.buy(id).subscribe(res => {
      this.response = res as Response;
      this.toastService.show(this.response.message, { classname: 'bg-success text-light', delay: 2000 });
      setTimeout(() => {
        this.routerLink.navigate(['/fin']);
      }, 3000);
    },err=>{
      this.response = err.error as Response;
      this.toastService.show(this.response.message, { classname: 'bg-danger text-light', delay: 5000 });
    });
  }
}
