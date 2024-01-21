import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../alumnosService/alumnos.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  alumno:any
  flagModificar:boolean = false
  flag:boolean = false
  formulario!:FormGroup
  imagen: any = ""

  constructor(private route:ActivatedRoute, private alumnosService: AlumnosService, private router: Router) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params =>{
      this.alumno = params["alumno"]
    })

    this.formulario = new FormGroup({
      curso: new FormControl("",[Validators.required]),
      puntos: new FormControl("",[Validators.required])
      })

  }

  eliminarCurso(){
    this.alumnosService.arrayAlumnos.forEach((curso,index) => {
      if (curso.curso === this.alumno.curso && curso.puntos === this.alumno.puntos) {
        this.alumnosService.eliminarAlumno(index)
      }
    })

    this.router.navigate(["/home"])

  }

  modificarCurso(){
    this.flagModificar = true;
  }

  modificar(){
    if (this.formulario.valid) {
      this.alumnosService.modificarAlumno(this.alumno,this.formulario.get("curso")?.value,this.formulario.get("puntos")?.value)
    }
  }

  anadirFoto(){
    const image = Camera.getPhoto({
      quality:90,
      width:200,
      height:200,
      resultType: CameraResultType.Base64

    }).then(photo =>{
      this.imagen = `data:image/jpeg;base64,${photo.base64String}`
      this.alumno.imagen = this.imagen
    })

    

  }


}
