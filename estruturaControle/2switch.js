const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {// no bloco switch ñ pode ter intervalo nem números quebrados, o comando floor arredonda o número para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break // se não utilizar o break ele vai sair executando todas as opçõea abaixo dela
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)

const imprimirResultado2 = function (nota) {
    switch (Math.floor(nota)) {// no bloco switch ñ pode ter intervalo nem números quebrados, o comando floor arredonda o número para baixo
        case 10:
        case 9:
            console.log('Quadro de Honra')
            //break // se não utilizar o break ele vai sair executando todas as opçõea abaixo dela
        case 8: case 7:
            console.log('Aprovado')
            //break
        case 6: case 5: case 4: // os casos podem ser descritos em uma mesma linha
            console.log('Recuperação')
            //break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            //break
        default:
            console.log('Nota inválida')
    }
}

imprimirResultado2(10)