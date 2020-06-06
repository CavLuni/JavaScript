console.log(7 / 0) // qualquer número dividido por 0 vai retornar Infinity
console.log("10" / 2) // aceita normalmente pq não tem operação com string que o possa "dividir"
console.log("10" + 2) //  neste caso ele não vai somar, vai concatenar os numeros, por se tratar de um string
console.log("Show!" *2)// Não aceita
console.log(0.1 + 0.7) // vai retornar um valor aproximado pq torna o calculo mais rapido
//console.log(10.toString()) para aceitar tem que colocar o numero entre parenteses conforme abaixo
console.log((10).toString())
console.log((10.345).toFixed(2))