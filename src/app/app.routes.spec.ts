import { MedicoComponent } from "./intermedio-2/medico/medico.component"
import { RUTAS } from "./avanzado/rutas/app.routes"

describe('rutas principales', ()=> {


    it('debe de existir la ruta medico/:id', ()=>{

        expect(RUTAS).toContain({path:'medico/:id', component:MedicoComponent})
    })


})