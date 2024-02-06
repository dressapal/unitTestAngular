import { obtenerRobots } from "./arreglos"

describe('prueba de arreglos', ()=>{

    it('debe retornar al menos 3 robots',()=>{

        const res = obtenerRobots();
        expect(res.length).toBeGreaterThanOrEqual(3);
    })

    it('debe existir MegaMan y Ultron',()=>{

        const res = obtenerRobots();
        expect(res).toContain('megaman');
        expect(res).toContain('ultron');

    })

})