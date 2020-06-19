const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove o ultimo item do array
console.log(pilotos)

pilotos.push('Verstappen')//adiciona um elemento
console.log(pilotos)
pilotos.shift()//remove o primeiro elemento
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)//adiciona o primeiro elemento

pilotos.splice(2, 0, 'Bottas', 'Massa')// primeiro indice 2 é apartir do item 2, 0 quer dizer que não vai remover ninguem, e vai add os dois pilotos
console.log(pilotos)

pilotos.splice(3, 1)// a apartir do indice 3 remove um item
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //cria um novo array a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)//cria um novo array >=1 e >4
console.log(algunsPilotos2)