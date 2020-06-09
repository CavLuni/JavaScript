function soBoaNoticia(nota) {
    if (nota>= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo()// falso
seForVerdadeEuFalo(null)// falso
seForVerdadeEuFalo(undefined)// falso
seForVerdadeEuFalo(NaN)// falso
seForVerdadeEuFalo('')// falso
seForVerdadeEuFalo(0)// falso
seForVerdadeEuFalo(-1)// verdadeiro
seForVerdadeEuFalo(' ')// verdadeiro
seForVerdadeEuFalo('!')// verdadeiro

function teste1(num) {
    if(num > 7)// o bloco if não precisa necessariamente das chaves, mas sem ela, só o primeiro comando passa a pertencer ao bloco if
    console.log(num)
    console.log('Final')// será executado de qualquer forma pois não pertence ao bloco if
}
teste1(6)
teste1(8)

function teste2(num) {
    if(num > 7); { // maneira errada o ; separa o bloco if do bloco de chaves praticamente anulando o if ja que ; é uma sentensa de código
        console.log(num)
    }
}
teste2(6)
teste2(8)

const imprimirResultado = function(nota) {
if (nota >= 7) {
    console.log('Aprovado')
} else {
    console.log('Reprovado')
}
}
imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa') // cuidado ao comparar tipos diferentes, como a linguagem não vai conseguir comparar um inteiro com uma string vai cair no bloco falso

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultado2 = function(nota) {
    if(nota.entre(9,10)) {
        console.log('Quadro de Honra')
    }else if (nota.entre(7, 8.99)) {
        console.log('Aprovado')
    }else if(nota.entre(4, 6.99)) {
        console.log('Reprovado')
    }else {
        console.log('Nota Inválida')
    }
    console.log('Fim')
}

imprimirResultado2(10)
imprimirResultado2(8.9)
imprimirResultado2(6.55)
imprimirResultado2(2.55)
imprimirResultado2(-1)
imprimirResultado2(11)
