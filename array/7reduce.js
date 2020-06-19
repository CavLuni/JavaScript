Array.prototype.reduce2 = function(callback, valorInicial) {//implementação do reduce
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this [0]
    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))


const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false },
    {nome: 'Maria', nota: 9.2, bolsista: true },
    {nome: 'Pedro', nota: 9.8, bolsista: false },
    {nome: 'Denis', nota: 8.7, bolsista: true },
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 10)//passando um valor inicial 10 ele vai percorrer o Array desde o primeiro elemento, sem passar um valor inicial ele pega o primeiro elemento como valor inicial e começa a percorrer a partir do segundo elemento

const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

