import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('debe de mostrar la leyenda', () => {
        component.leyenda = 'progreso de carga';
        fixture.detectChanges();
        const elem :HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement;

        expect(elem.innerHTML).toContain('progreso de carga')

    });

    it('debe demostrar en el input el valor del progreso', ()=> {

        component.cambiarValor(5);
        fixture.detectChanges();
        fixture.whenStable().then(()=>{
            const input  = fixture.debugElement.query(By.css('input')).nativeElement;;
            expect(input.value).toBe('55')

        })


        

    })

    it('debe decrementar/incrementar en 5 con el click de boton', ()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
        console.log(botones);

        botones[0].triggerEventHandler('click',null);
        expect(component.progreso).toBe(45)

        botones[1].triggerEventHandler('click',null);
        expect(component.progreso).toBe(50)
    })

    it('En el titulo del componente debe mostrar el progreso', ()=>{
        const botones = fixture.debugElement.queryAll(By.css('.btn-primary'))
        botones[0].triggerEventHandler('click',null);
        fixture.detectChanges();

        const elem:HTMLElement = fixture.debugElement.query(By.css('h3')).nativeElement

        expect(elem.innerHTML).toContain('45')

    })

});
