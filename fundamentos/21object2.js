console.log(typeof Object)
console.log(typeof new Object)// o new transforma a função em objeto
console.log(typeof new Object())// não precisa necessáriamente ter os parenteses da função

const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto{}
console.log(typeof Produto)
console.log(typeof new Produto)
