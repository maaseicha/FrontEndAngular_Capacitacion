import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { CatalogoComponent } from './component/catalogo/catalogo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FooterComponent } from './component/footer/footer.component';
import { FiltrarDataPipe } from './Pipe/filtrar-data.pipe';
import { HomeComponent } from './component/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastsContainer } from './component/toasts-container.component';
import { CarritoComponent } from './component/carrito/carrito.component';
import { ProductComponent } from './component/product/product.component';
import { DataTablesModule } from "angular-datatables";
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { LoginComponent } from './component/login/login.component';
import { MensajeComponent } from './component/mensaje/mensaje.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CatalogoComponent,
    FooterComponent,
    FiltrarDataPipe,
    HomeComponent,
    ToastsContainer,
    CarritoComponent,
    ProductComponent,
    LoginComponent,
    MensajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    DataTablesModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
