let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'//mais utilizado para substituir um item em uma posição
aprovados[9] = 'Alex'
aprovados.push('Denis')// mais utilizado para adicionar um item no final do Array
console.log(aprovados.length)//mostra o tamanho do Array
console.log(aprovados)
aprovados.sort()//ordena em ordem alfabética
console.log(aprovados)

delete aprovados[1]//deleta um item de um array mas não reorganiza, deixa o item indefined
aprovados.splice(5, 6, 'Phanye', 'Any')// deleta os itens 5 e 6 substituindo-os por Phanie e Any
console.log(aprovados)

