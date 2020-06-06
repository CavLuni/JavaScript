const a = {name: 'teste'}
console.log(a)
const b = a//atribuição por referencia b e a apontam para o mesmo endereço na memória, alterando um, altero o outro
console.log(b)
b.name = 'opa'
console.log(a)

let c = 3
let d = c
d++
console.log(d)//tipos primitivos recebem uma cópia do atributo

let valor //não inicializada
console.log(valor)//undefined, foi declarada mas não foi definida
//console.log(valor2)//is not defined, não foi inicializada nem definida
valor = null//ausencia de valor, usualmente usar o null para zerar atributos, deixe que o sistema utilize o undefined
console.log(valor)
//console.log(valor.toString()) null não pode ser lido retorna erro! de tipo

const produto = {}
console.log(produto.preco)//se o objeto existir e o atributo não, retornará undefined, mas não dará erro
console.log(produto)
produto.preco = 3.50
console.log(produto)
produto.preco = undefined //evite atribuir undefined, definir como undefined não exclui o atributo
console.log(!!produto.preco)
// delete produto.preco seria o comando para deletar um atributo
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)

