import { ServiceOpcionalService } from './../../service/service-opcional.service';
import { Response } from './../../Model/Response';
import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/service/store.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/Model/Product';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
})
export class CatalogoComponent implements OnInit {
  producto: Product;
  products: Response;
  response: Response;
  datos: any;
  cantidadCarrito:number=1;

  //Filtrar por
  gender:string;
  size:string;
  color:string;

  //datos para cargar datos en filtrar catalogo
  colors: any;
  tallas: any;

  filtro:any;
  
  constructor(public toastService: ToastService, private storeService:StoreService, private service:ServiceOpcionalService, private productService:ProductService) {
    this.products = {
      message: '',
      code: '',
      status: true,
      data: [],
    };
    this.response = this.products;
    this.gender = '';
    this.size = '';
    this.color = '';
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
    this.storeService.getProducts(this.gender, this.size, this.color).subscribe(
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

  filterParams(){
    this.storeService.getProducts(this.gender, this.size, this.color).subscribe(
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

  loadData(){
    this.colors = this.service.getColors();
    this.tallas = this.service.getTallas();
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
