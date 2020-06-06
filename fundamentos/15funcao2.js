//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//Armazenando uma funcao arrow em uma variável

const soma = (a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implícito
const subracao = (a, b) => a - b // eu só envolvo em parenteses quando os parametros forem mais do que 1
console.log(subracao(2, 3))

const imprimir2 = a => console.log(a)// exemplo de apenas um parametro sem os parenteses
imprimir2('Legal!!!')