//função é um bloco de código nomeado para ser chamado, recebendo parametros para ser executado
// os ingredientes receberão um passo a passo que será processado para um devido fim
//função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 3, 4, 5, 7, 9, 10)// se eu passar mais parâmetros ele vai considerar apenas os 2 primeiros
imprimirSoma()

//função com retorno
function soma(a, b = 1) {// atribuindo o valor inicial, se o parametro não for passado ele assume esse valor
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())// se eu não atribuir pelo menos um parametro vai retornar NaN