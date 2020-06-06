for (var i = 0; i < 10; i++){
    console.log(i)
}
console.log('i =', i)// a variável i continua disponível fora do bloco de repetição

const funcs = []
for (var i = 0; i<10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs [2] ()
funcs [8] () // pra qualquer posição o retorno será 10