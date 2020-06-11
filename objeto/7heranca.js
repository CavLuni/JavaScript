// se o atributo não existir no objeto ele vai procurando em seus protótipos até achar, se não existir vai retornar undefined
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log (filho.attr1)
console.log (filho.attr0)
console.log (filho.attr2)
console.log (filho.attr3) 

const avo1 = {attr1: 'A'}
const pai1 = {attr2: 'B'}
const filho1 = {attr3: 'C'}
Object.setPrototypeOf(filho1, pai1)//outra maneira de referenciar herança filho1 herda de pai1
Object.setPrototypeOf(pai1, avo1)
console.log (filho.attr1)
console.log (filho.attr0)
console.log (filho.attr2)
console.log (filho.attr3) 
console.log (filho1.attr1)

const pai2 = {nome: 'Pedro', corCabelo: 'preto'}
const filha1 = Object.create(pai2)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai2, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})
console.log(filha2.nome)
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)// atributo do objeto pai pode ser acessado na herança mas não consta na herança
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))//lista atributos de um objeto

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}