console.log('a =', a)
var a = 2//hoisting faz com que a declaração da variável a esteja antes do primeiro chamamento, será movida para o topo
console.log('a =', a)

function teste() {// dentro de uma função o comportamento é o mesmo
    console.log('a =', a)
var a = 2
console.log('a =', a)
}
teste()

console.log('b =', b)
//let b = 2//hoisting não acontece com o let
console.log('b =', b)