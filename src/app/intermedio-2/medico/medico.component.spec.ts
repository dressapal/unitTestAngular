import { HttpClientModule } from '@angular/common/http';
import { MedicosService } from '../../intermedias/espias/medicos.service';
import {MedicoComponent} from './medico.component'
import {ComponentFixture, TestBed} from '@angular/core/testing'

describe('medico component', ()=>{

    let component:MedicoComponent;
    let fixture:ComponentFixture<MedicoComponent>

    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[MedicoComponent, HttpClientModule],
            providers:[MedicosService]
        })

      fixture =  TestBed.createComponent(MedicoComponent);
      component = fixture.componentInstance;
    })

    it( 'debe crearse componente', ()=>{
        expect(component).toBeTruthy()
    })

    it('debe retornar el nombre del medico',()=>{
        const nombre = 'Juan'
        const mensaje = component.saludarMedico(nombre);
        expect(mensaje).toContain(nombre);
    })


})