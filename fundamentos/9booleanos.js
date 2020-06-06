let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1

console.log(!!isAtivo)

console.log('os verdadeiros...') // condições que retornam verdadeiro
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)

console.log('os falsos...') // condições que retornam falso
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

let nome = 'Lucas'
console.log(nome || 'Desconhecido')// a condição ou da prioridade para o nome, se ele não existir retorna a outra opção
