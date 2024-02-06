import { Component } from '@angular/core';
import { MedicosService } from '../../intermedias/espias/medicos.service';

@Component({
  selector: 'app-medico',
  standalone: true,
  templateUrl: './medico.component.html',
})
export class MedicoComponent {

  medicos:any[] = [];

  constructor(public _medicoService:MedicosService){

  }


  saludarMedico(nombre:string){
    return `Hola ${nombre}`;
  }

  obtenerMedicos(){
    this._medicoService.getMedicos().subscribe( medicos => this.medicos = medicos)
  }

}
