import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ObservablesComponent } from './observables.component';




describe('Observable', () => {
  let component: ObservablesComponent;
  let fixture: ComponentFixture<ObservablesComponent>;
  
  beforeEach( () => {
      // TestBed.configureTestingModule({
      //     imports: [ FormsModule ]
      // });
  
      fixture = TestBed.createComponent(ObservablesComponent);
      component = fixture.componentInstance;
  
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should return an observable with data', (done: DoneFn) => {
    component.getData().pipe(take(1)).subscribe(data => {
      expect(data).toEqual([1, 2, 3, 4, 5]);
      done();
    });
  });

  it('should return data after 1000ms', fakeAsync(() => {
    let result: number[] | undefined;
    component.getData().subscribe(data => {
      result = data;
    });
    tick(1000); // Simula el paso del tiempo
    expect(result).toEqual([1, 2, 3, 4, 5]);
  }));

  it('should complete the observable', (done: DoneFn) => {
    component.getData().subscribe({
      complete: () => {
        expect(true).toBeTruthy(); // La función 'complete' se llama correctamente
        done();
      }
    });
  })

});