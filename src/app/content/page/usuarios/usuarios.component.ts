import { Component, OnInit } from '@angular/core';

import { UsuariosService } from "./../../../core/services/usuarios.service";
import { Usuarios } from 'src/app/core/models/usuarios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  public usuarios: Usuarios[];

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
  }

  getUsuarios(){

    this.usuariosService.getUsuarios()
    .subscribe((usuarios)=>{
      console.log(usuarios)
      this.usuarios = usuarios;
    })
  }

}
