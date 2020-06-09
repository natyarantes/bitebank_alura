import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {Funcionario} from "./Funcionarios/Funcionario.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

const cliente1 = new Cliente("Ricardo", 11122233344, 456)

const diretor = new Diretor("Rodrigo", 10000, 12345678900)
diretor.cadastrarSenha(123456)
const gerente = new Gerente("Ricardo", 5000, 12345678901)
gerente.cadastrarSenha(123)

const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "456")

console.log(clienteEstaLogado)


