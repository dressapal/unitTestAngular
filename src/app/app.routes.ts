import { Routes } from '@angular/router';
import { HospitalComponent } from './intermedio-2/hospital/hospital.component';
import { IncrementadorComponent } from './intermedio-2/incrementador/incrementador.component';
import { MedicoComponent } from './intermedio-2/medico/medico.component';

export const routes: Routes = [

    {path:'hospital', component:HospitalComponent},
    {path:'medico/:id', component:MedicoComponent},
    {path:'**', component:IncrementadorComponent}
];
