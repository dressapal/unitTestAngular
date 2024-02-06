import { Jugador } from "./clase"

describe('pruebas de clase',()=> {
    const jugador = new Jugador();

    beforeEach(()=>{
        jugador.hp = 100
    })

    it('debe retornar 80 hp si recibe 20 de dano', ()=>{

        const resp = jugador.recibiDano(20);

        expect(resp).toBe(80)


    })

    it('debe retornar 50 hp si recibe 50 de dano', ()=>{

        const resp = jugador.recibiDano(50);

        expect(resp).toBe(50)


    })

    it('debe retornar 0 de hp , si recibe 100 de dano o mas', ()=>{
        const resp = jugador.recibiDano(100);
        expect(resp).toBe(0);

    })



})