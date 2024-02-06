import { Jugador2 } from "./jugador2"


describe('jugador 2 emit', ()=>{

    let jugador :Jugador2;

    beforeEach(()=> jugador = new Jugador2());

    it('debe emitir un evento cuando recibe dano',()=> {
        
        let nuevohp = 0;

        jugador.hpCambia.subscribe( hp => {
            nuevohp =hp
        })

        jugador.recibiDano(1000);
        
        expect(nuevohp).toBe(0);
    })

    it('debe emitir un evento cuando recibe dano y sobrevivir si es menos 100',()=> {
        
        let nuevohp = 0;

        jugador.hpCambia.subscribe( hp => {
            nuevohp =hp
        })

        jugador.recibiDano(50);
        
        expect(nuevohp).toBe(50);
    })


})