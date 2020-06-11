//Object.preventExtensions não permite adicões de atributos
const produto = Object.preventExtensions({// não é possivel adicionar atributo
    nome: 'Qualquer', preco: 1.99, tag: 'pomocao'
})
 console.log ('Extensível:', Object.isExtensible(produto))
 produto.nome = 'Borracha'//permite alteração
 produto.descricao = 'borracha escolar branca' 
 delete produto.tag//permite deleção
 console.log(produto)

 // Object.seal
 const pessoa = {nome: 'Juliana', idade: 35 }
 Object.seal(pessoa) // não permite adicição nem deleção de atributos, mas permite modificação
 console.log('Selado:', Object.isSealed(pessoa))

 pessoa.sobrenome = 'Silva'
 delete pessoa.nome
 pessoa.idade = 29
 console.log(pessoa)

 //Object.freeze = selado + valores constantes, não permite alteração nem adição nem deleção
