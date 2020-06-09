import { Cliente } from "../Cliente.js"

export class Conta{
    constructor(tipo, saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Conta é uma classe abstrata e não deveria ser instanciada diretamente.")
        }
        
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
        this._tipo = tipo
        
    }

    set cliente(novoValor){
        if (novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    //abstract method, must be overwritten
    sacar(valor){
        throw new Error("O método é abstrato e deveria ser sobrescrito")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado
            return valorSacado
        } else {
            console.log("Saldo insuficiente")
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}