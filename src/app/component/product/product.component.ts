import { Response } from './../../Model/Response';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ProductService } from 'src/app/service/product.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from 'src/app/Model/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  //validar fomulario de ingresar
  contactoP!: FormGroup;
  submitted = false;
  //var para datatables
  dtOptions: DataTables.Settings;
  dtTrigger = new Subject<any>();

  products: Response;
  datos: any;
  producto: Product;
  edit: boolean = false;

  constructor(
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    this.products = {
      message: '',
      code: '',
      status: true,
      data: [],
    };
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.24/i18n/Spanish.json',
      },
    };
    config.backdrop = 'static';
    config.keyboard = false;
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
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data as Response;
        this.datos = this.products.data;
        this.dtTrigger.next(null);
      },
      (err) => {
        this.products = err.error;
        this.datos = err.error.data;
      }
    );

    //control del formulario de ingresar
    this.contactoP = this.formBuilder.group({
      code: [null, Validators.required],
      name: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z-\s.áéíóúÁÉÍÓÚñÑ]+$/),
        ],
      ],
      model: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z-\s.áéíóúÁÉÍÓÚñÑ]+$/),
        ],
      ],
      gender: [null, Validators.required],
      color: [null, [Validators.required, Validators.pattern(/^[a-z-\s]+$/)]],
      size: [null, [Validators.required, Validators.pattern('^[0-9]+')]],
      stock: [null, [Validators.required, Validators.pattern('^[0-9]+')]],
      price: [
        null,
        [Validators.required, Validators.pattern(/^[0-9]+([.])?([0-9]+)?$/)],
      ],
      image: [null, Validators.required],
    });
  }

  // control del formulario de ingresar
  get f() {
    return this.contactoP.controls;
  }

  open(content: any, accion: string, id: string) {
    if (accion === 'save') {
      this.edit = false;
      this.submitted = false;
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
    } else {
      this.edit = true;
      this.submitted = false;
      this.productService.getProductId(id).subscribe((res) => {
        this.products = res as Response;
        this.producto = this.products.data as unknown as Product;
      });
    }
    this.modalService.open(content, { size: 'xl', scrollable: true });
  }

  updateProduct() {
    this.submitted = true;
    if (this.contactoP.invalid) {
      return;
    }
    this.productService.updateProduct(this.producto).subscribe(
      (res) => {
        this.products = res as Response;
        this.toastService.show(this.products.message, {
          classname: 'bg-success text-light',
          delay: 2000,
        });
        setTimeout('window.location.reload()', 3000); //se recarga la pagina despues de 3 segundos
      },
      (err) => {
        console.log(err.error);
        this.products = err.error as Response;
        this.toastService.show(this.products.message, {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  saveNewProduct() {
    this.submitted = true;
    if (this.contactoP.invalid) {
      return;
    }
    this.productService.saveProduct(this.producto).subscribe(
      (res) => {
        this.products = res as Response;
        this.toastService.show(this.products.message, {
          classname: 'bg-success text-light',
          delay: 2000,
        });
        setTimeout('window.location.reload()', 3000); //se recarga la pagina despues de 3 segundos
      },
      (err) => {
        console.log(err.error);
        this.products = err.error as Response;
        this.toastService.show(this.products.message, {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  delete(code: string) {
    this.productService.deleteProduct(code).subscribe(
      (res) => {
        this.products = res as Response;
        this.toastService.show(this.products.message, {
          classname: 'bg-success text-light',
          delay: 2000,
        });
        setTimeout('window.location.reload()', 3000); //se recarga la pagina despues de 3 segundos
      },
      (err) => {
        console.log(err.error);
        this.products = err.error as Response;
        this.toastService.show(this.products.message, {
          classname: 'bg-danger text-light',
          delay: 5000,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
