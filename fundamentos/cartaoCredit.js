//Janeiro contrato copel 1426128 pr 202012514592
let compras = 969.24
let pagamento = 400

let resultJan = (compras - pagamento)

console.log('Jan ' + resultJan)

//Fevereiro
compras = 765.51
pagamento = 500

resultFev = (compras - pagamento)

console.log('Fev ' + resultFev)
console.log(`Acumulado ${resultJan + resultFev}`)

//Março
compras = 608.15
pagamento = 

resultMar = (compras - pagamento)

console.log('Mar ' + resultMar)
console.log(`Acumulado ${resultJan + resultFev + resultMar}`)

//Abril
compras = 407.48
pagamento = 872
let parcelamento = 942.90

resultAbr = (compras - pagamento)

console.log('Abr ' + resultAbr)
console.log(`Acumulado ${resultJan + resultFev + resultMar + resultAbr}`)

//Maio
compras = 213.88
pagamento = 350.00

resultMai = (compras - pagamento)

console.log('Mai ' + resultMai)
console.log(`Acumulado ${resultJan + resultFev + resultMar + resultAbr + resultMai}`)

//Junho
compras = 245.13
pagamento = 130

resultJun = (compras - pagamento)

console.log('Jun ' + resultJun)

console.log(`${resultJan+resultFev+resultMar+resultAbr+resultMai+resultJun}`)