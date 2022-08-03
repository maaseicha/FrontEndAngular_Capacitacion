import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductComponent } from './component/product/product.component';
import { LoginComponent } from './component/login/login.component';
import { ProductService } from './service/product.service';
import { ServiceOpcionalService } from './service/service-opcional.service';
import { MensajeComponent } from './component/mensaje/mensaje.component';

const routes: Routes = [
  { path: '', component: HomeComponent, redirectTo: '', pathMatch: 'full'},
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'product', component: ProductComponent, canActivate:[ProductService] },
  { path: 'fin', component: MensajeComponent, canActivate:[ProductService] },
  { path: 'login', component: LoginComponent, canActivate:[ServiceOpcionalService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
