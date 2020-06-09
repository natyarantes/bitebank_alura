import {Conta} from "./Conta.js"

export class ContaSalario extends Conta {

    constructor() {
        super(0, this.cliente, 100)
    }

    //overwritten
    sacar(valor){
        const taxa = 1.1
        return this._sacar(valor, taxa)
    }
}