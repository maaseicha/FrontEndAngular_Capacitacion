import { Response } from './../../Model/Response';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit {
  idUser:number | string | null = sessionStorage.getItem('userId');
  response: Response;
  datos: any;

  constructor(private userService: UserService) { 
    this.response = {
      message: '',
      code: '',
      status: true,
      data: [],
    };
  }

  ngOnInit(): void {
    let id:number;
    if (this.idUser != null) {
      id = +this.idUser;  
    }else{
      id = 0;
    }
    this.userService.getPedidosByPerson(id).subscribe(res =>{
      this.response = res as Response;
      this.datos = this.response.data;
    },(err) => {
      this.response = err.error;
      this.datos = this.response.data;
    });
  }
}
