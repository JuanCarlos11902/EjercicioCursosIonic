import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  arrayAlumnos!: Array<any>
  $arrayLibros!: BehaviorSubject<any>
  constructor() { 

    this.arrayAlumnos = new Array()
    this.arrayAlumnos.push({
      curso: "2º de Bachillerato",
      puntos: 83
    })
    this.arrayAlumnos.push({
      curso: "1º de DAM",
      puntos: 91
    })
  }



}
