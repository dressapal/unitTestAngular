import { usuarioIngresado } from "./booleanos"

describe('pruebas de booleanos',  ()=> {
    it('debe retornar true',()=>{
        const res = usuarioIngresado();

        expect(res).toBeTruthy()


    })
})