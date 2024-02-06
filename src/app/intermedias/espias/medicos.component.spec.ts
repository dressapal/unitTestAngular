import { HttpClient } from '@angular/common/http';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClientTestingModule} from '@angular/common/http/testing'
import {  EMPTY, Observable, from } from 'rxjs';
import { throwError } from 'rxjs';



describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    let servicio  :MedicosService;


    beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [MedicosComponent],
          providers: [MedicosService],
          imports: [HttpClientTestingModule],
        });
    
        servicio = TestBed.inject(MedicosService);
        componente = new MedicosComponent(servicio);
      });



    it('debe de cargar los medicos', () => {


        const medicos = ['medicos1', 'medicos2', 'medicos3']

        spyOn(servicio, 'getMedicos').and.callFake(()=> {
            return from([medicos])
        })

         componente.ngOnInit();

         expect(componente.medicos.length).toBeGreaterThan(0)
        
    });

    it('debe de llamar al servicor para agregar un medico', ()=>{

        const spia = spyOn(servicio, 'agregarMedico').and.callFake(medico=>{
                return new Observable();
        })

        componente.agregarMedico();

        expect(spia).toHaveBeenCalled();
    })

    it('debe agregar un nuevo medico al arreglo', ()=>{
        const medicos = {id:1, nombre:'juan'}

        spyOn(servicio,'agregarMedico').and.returnValue(from([medicos]))

        componente.agregarMedico();

        expect(componente.medicos.indexOf(medicos)).toBeGreaterThanOrEqual(0);
    })

    it('no se pudo agregar un medico ', ()=> {

        const error = 'no se pudo agregar medico'

        spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));

        componente.agregarMedico();

        expect(componente.mensajeError).toBe(error)

    })

    it('debe de llamar al servidor para borrar un medico' , ()=> {

        spyOn(window,'confirm').and.returnValue(true);

        const spia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY)

        componente.borrarMedico('1');


        expect(spia).toHaveBeenCalledOnceWith('1')
    })



    it('no debe de llamar al servidor para borrar un medico' , ()=> {

        spyOn(window,'confirm').and.returnValue(false);

        const spia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY)

        componente.borrarMedico('1');


        expect(spia).not.toHaveBeenCalledOnceWith('1')
    })


});
