for (let i = 0; i < 10; i++){
    console.log(i)
}
//console.log('i =', i)// a variável i não continua disponível fora do bloco de repetição

const funcs = []
for (let i = 0; i<10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}
funcs [2] ()
funcs [8] () //o let retornará o valor correspondete a sua posição