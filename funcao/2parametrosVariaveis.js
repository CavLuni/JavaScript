function soma () {
    let soma = 0
    for (i in arguments) {// arguments são utilizados quando a função não exige parametros, e vc passa conforme sua necessidade
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3, 7))
console.log(soma(1.1, 2.2, 'teste', 3.3, 7))// por JS ser fracamente tipada o + vai concatenar os strings
console.log(soma('a', 'b', 'teste', 7))