import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnosService/alumnos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent  implements OnInit {
  arrayAlumnos!: Array<any> 
  constructor(public alumnosService: AlumnosService, private navController: NavController ) { 
    
  }

  ngOnInit() {

    this.alumnosService.$getLibros().subscribe(array =>{
      this.arrayAlumnos = array
    })

  }

  navegar(indice:number){
    let parametrosEnviar = {
      alumno: this.arrayAlumnos[indice]
    }

  this.navController.navigateForward("/details",{
    queryParams: parametrosEnviar
  })

  }

}
