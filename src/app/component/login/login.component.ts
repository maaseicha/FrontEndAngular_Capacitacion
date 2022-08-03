import { Response } from './../../Model/Response';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Model/Login';
import { UserService } from 'src/app/service/user.service';
import { ToastService } from 'src/app/service/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // variable
  show: boolean;

  user:Login={
    username:'',
    pass:''
  }
  response:Response;
  token:any;
  dato:any={
    id_usuario:'',
    username:'',
    password:'',
    rol:'',
    id_vendedor:''
  }

  constructor(public toastService: ToastService,private routerLink:Router,private usuarioService:UserService) { 
    this.show=false;
    this.response = {
      message: '',
      code: '',
      status: true,
      data: [],
    };
  }
  ngOnInit(): void {
  }
  entrar(){
    this.usuarioService.getToken(this.user).subscribe(res=>{
      this.response = res as Response;
      this.token = this.response.data;
      sessionStorage.setItem('userId',this.token.usuarioLogin)
      localStorage.setItem('token',this.token.tokenSession)
      this.toastService.show(this.response.message, { classname: 'bg-success text-light', delay: 2000 });
      setTimeout(() => {
        this.routerLink.navigate(['/product']);
      }, 3000);
    },err=>{
      this.response = err.error as Response;
      this.user = {
        username:'',
        pass:''
      }
      this.toastService.show(this.response.message, { classname: 'bg-danger text-light', delay: 5000 });
    })
  }
  // click event function toggle
  password() {
    this.show = !this.show;
  }
}
