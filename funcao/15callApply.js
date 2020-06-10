function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4567,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(carro))// passando objeto como argumento não tem diferença
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))// para passar argumentos a forma diverge
console.log(getPreco.apply(carro, [0.17, '$']))// apply exige que seja passado em forma de Array
