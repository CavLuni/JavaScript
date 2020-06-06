const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4498.90
prod1['DescontoLegal'] = 0.40//Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1//posso colocar objetos dentro de objetos
    }
}

console.log(prod2)