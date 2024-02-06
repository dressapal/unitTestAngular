import { Route, Routes } from "@angular/router";
import { HospitalComponent } from "../../intermedio-2/hospital/hospital.component";
import { MedicoComponent } from "../../intermedio-2/medico/medico.component";
import { IncrementadorComponent } from "../../intermedio-2/incrementador/incrementador.component";

export const RUTAS:Routes = [
    {path:'hospital', component:HospitalComponent},
    {path:'medico/:id', component:MedicoComponent},
    {path:'**', component:IncrementadorComponent}
]