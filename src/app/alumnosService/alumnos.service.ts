import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
  arrayAlumnos!: Array<any>
  $arrayLibros: BehaviorSubject<Array<any>>
  constructor() { 
    this.arrayAlumnos = new Array()
    this.$arrayLibros = new BehaviorSubject(this.arrayAlumnos)
    this.leerArchivo()
    
  }

  $getLibros(){
    return this.$arrayLibros.asObservable()
  }

  addAlumno(alumno:{curso:string,puntos:number}){
    this.arrayAlumnos.push({
      curso: alumno.curso,
      puntos: alumno.puntos,
    })
    
    this.$arrayLibros.next(this.arrayAlumnos);
    this.modificarArchivo()
  }

  eliminarAlumno(index:number){
    this.arrayAlumnos.splice(index,1);
    this.$arrayLibros.next(this.arrayAlumnos)
    this.modificarArchivo()
  }

  modificarAlumno(alumno: {curso: string, puntos:number}, nuevoCurso:string, nuevosPuntos:string){
    this.arrayAlumnos.forEach(curso =>{
      if (alumno.curso === curso.curso && alumno.puntos === curso.puntos) {
        curso.curso = nuevoCurso;
        curso.puntos = parseInt(nuevosPuntos)
      }
    })

    this.$arrayLibros.next(this.arrayAlumnos);
    this.modificarArchivo()

  }

  leerArchivo(){
    Filesystem.readFile({
      path:"contenidoArray.txt",
      directory: Directory.Documents,
      encoding: Encoding.UTF8
    }).then(contenido =>{
      this.arrayAlumnos = JSON.parse(contenido.data.toString())
      this.$arrayLibros.next(this.arrayAlumnos)
    }).catch(err =>{
      this.modificarArchivo()
    })
    
  }

  modificarArchivo(){
    Filesystem.writeFile({
      path:"contenidoArray.txt",
      data: JSON.stringify(this.arrayAlumnos),
      directory:Directory.Documents,
      encoding: Encoding.UTF8
    })
  }
  

}
