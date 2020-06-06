const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10

console.log(valores[4])
console.log(valores.length)

valores.push({ie: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())// exclui o ultimo item de um array
delete valores[0]// deleta item de um array na posição x
console.log(valores)

console.log(typeof valores) // Um array é do tipo object