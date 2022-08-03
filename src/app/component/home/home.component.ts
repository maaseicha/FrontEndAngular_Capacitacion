import { StoreService } from 'src/app/service/store.service';
import { Response } from './../../Model/Response';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/service/toast.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/Model/Product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: Response;
  producto: Product;
  response: Response;
  datos: any;
  cantidadCarrito:number=1;

  constructor(public toastService: ToastService, private storeService:StoreService, private productService:ProductService) { 
    this.products = {
      message: '',
      code: '',
      status: true,
      data: [],
    };
    this.response = this.products;
    this.producto = {
      code: '',
      name: '',
      model: '',
      gender: '',
      color: '',
      size: '',
      stock: 0,
      price: 0,
      image: '',
    };
  }

  ngOnInit(): void {
    this.storeService.getProductsHome().subscribe(
      (res) => {
        this.products = res as Response;
        if (this.products.code == '200' && this.products.status) {
          this.datos = this.products.data;
        } else {
          alert('Product not found');
        }
      },
      (err) => {
        this.products = err.error;
        this.datos = err.error.data;
      }
    );
  }

  getProduct(code:string) {
    this.productService.getProductId(code).subscribe(data => {
      this.products = data as Response;
      this.producto = this.products.data as unknown as Product;
    })
  }

  carrito(code:string){
    this.storeService.carrito(code, this.cantidadCarrito).subscribe(res =>{
      this.response = res as Response;
      this.toastService.show(this.response.message, { classname: 'bg-success text-light', delay: 3000 });
    },err =>{
      this.response = err.error as Response;
      this.toastService.show(this.response.message, { classname: 'bg-danger text-light', delay: 3000 });
    });
  }
}
