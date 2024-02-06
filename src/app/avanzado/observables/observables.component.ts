import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  standalone: true,
  imports: [],
  templateUrl: './observables.component.html',
  styleUrl: './observables.component.css'
})
export class ObservablesComponent {

  
  getData(): Observable<number[]> {
    return of([1, 2, 3, 4, 5]);
  }

  constructor() { }

}


