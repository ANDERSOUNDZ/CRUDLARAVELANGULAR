import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Nombre } from '../model/nombres';

@Component({
  selector: 'app-get-users',
  templateUrl: './get-users.component.html',
  styleUrls: ['./get-users.component.css']
})
export class GetUsersComponent implements OnInit {

  // Variables
  nombres: Nombre;

  constructor(
    // clases
    private servicio: ServiceService
    ) { }

  ngOnInit() {
    this.nombres = new Nombre();
    this.servicio.get('usuarios').subscribe(
      response =>{
        this.nombres = response[0];
      }
    );
  }

  // metodos o funciones


}
