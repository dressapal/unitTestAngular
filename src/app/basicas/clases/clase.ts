export class Jugador {
    hp!: number;

    constructor(){
        this.hp = 100;
    }

    recibiDano(dano:number){
        if(dano>= this.hp){this.hp =0}
        else{
            this.hp = this.hp - dano;
        }

        return this.hp
    }

}