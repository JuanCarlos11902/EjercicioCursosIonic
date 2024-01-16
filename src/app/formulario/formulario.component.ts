import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent  implements OnInit {

  formularioPrincipal!: FormGroup

  constructor() { }

  ngOnInit() {
    this.formularioPrincipal = new FormGroup({
    curso: new FormControl("",[Validators.required]),
    puntos: new FormControl("",[Validators.required])
    })
  }
}
