import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { filter, map, take } from 'rxjs/operators';
import { Observable, combineLatest, forkJoin, of, throwError } from 'rxjs';
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


  it('should handle error', (done: DoneFn) => {
    const errorMessage = 'An error occurred';
    spyOn(component, 'getData').and.returnValue(throwError(errorMessage));

    component.getData().subscribe({
      error: (error) => {
        expect(error).toEqual(errorMessage);
        done();
      }
    });
  })

  it('should transform data correctly using map operator', (done: DoneFn) => {
    component.getData().pipe(
      map(data => data.map(item => item * 2))
    ).subscribe(transformedData => {
      expect(transformedData).toEqual([2, 4, 6, 8, 10]);
      done();
    });
  });

  it('should filter data correctly using filter operator', (done: DoneFn) => {
    component.getData().pipe(
      filter(data => data.length > 3)
    ).subscribe(filteredData => {
      expect(filteredData).toEqual([1, 2, 3, 4, 5]); // El conjunto completo de datos ya que todos los elementos cumplen la condición
      done();
    });
  });

  

  it('should combine latest data from two observables correctly', (done: DoneFn) => {
    const mockOtherObservable = of(['a', 'b', 'c']);
    const mockObservable = component.getData();


    combineLatest([mockObservable, mockOtherObservable]).subscribe(([data, otherData]):any => {
      expect(data).toEqual([1, 2, 3, 4, 5]);
      expect(otherData).toEqual(['a', 'b', 'c']);
      done();
    });
      
  });

});