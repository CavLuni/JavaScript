const escola = 'Cod3r'

console.log(escola.charAt(4)) //retorna o Caracter 4, começando do 0
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//retorna o código da Tabela Unicode do caracter 3
console.log(escola.indexOf('3'))

console.log(escola.substring(1))// corta o string a partir da posição 1
console.log(escola.substring(0, 3))// corta o string da posição 0 até a 3

console.log('Escola '.concat(escola).concat('!')) // opção concat para concatenar
console.log('Escola '+ escola + '!')//Outra maneira de concatenar e mais usual
console.log(escola.replace(3, 'e')) //substitui o caracter 3 pelo e

console.log('Ana,Maria,Pedro'.split(','))// transforma o string em itens usando o separador ',' para definição
console.log('Ana Maria Pedro'.split(''))// transforma cada caracter em um item separando-os por virgula