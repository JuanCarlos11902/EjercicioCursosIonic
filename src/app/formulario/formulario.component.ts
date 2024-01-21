import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnosService } from '../alumnosService/alumnos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  formularioPrincipal!: FormGroup
  flag:boolean = true

  public constructor(public alumnos: AlumnosService, private alertController: AlertController) {
    
   }

  ngOnInit() {
    this.formularioPrincipal = new FormGroup({
    curso: new FormControl("",[Validators.required]),
    puntos: new FormControl("",[Validators.required])
    })
  }

  async anadirAlumno(){
    if (this.formularioPrincipal.valid) {
      this.alumnos.addAlumno({curso: this.formularioPrincipal.get("curso")?.value, 
      puntos: parseInt(this.formularioPrincipal.get("puntos")?.value)})
    }
    else{
      const alert = await this.alertController.create({
        header: "Atención",
        message:"El curso y sus puntos son requeridos",
        buttons: ['Cancel']

      })

      await alert.present(
        
      )

    }
  }
}
