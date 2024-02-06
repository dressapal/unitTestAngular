import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Observable, Subject, empty } from 'rxjs';


class fakeRouter{
  navigate(params:any){ }
}

class fakeActivateRoute{
  //params:Observable<any> = EMPTY;

  private subject = new Subject();

  get params(){
    return this.subject.asObservable()
  }

  push(valor:any){
    this.subject.next(valor)
  }
}

describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterMedicoComponent ],
      providers:[
        {provide:Router, useClass:fakeRouter},
        {provide:ActivatedRoute,useClass:fakeActivateRoute}
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de redireccionar a medico cuando se guarde', ()=>{
    const router = TestBed.get(Router);

    const spy = spyOn(router, 'navigate')

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico','123'])

  })

  it('debe de colocar el id = nuevo', ()=>{
    component = fixture.componentInstance;
    const activateRoute:fakeActivateRoute = TestBed.get(ActivatedRoute);

    activateRoute.push({id:'nuevo'});

    expect(component.id).toBe('nuevo')
  })
});
