const nome = 'Rebeca'
const concatenacao = 'Olá ' 
+ nome 
+ '!' // concatenado com + ele vai juntar tudo namesma linha

const template = `
    Olá
    ${nome}!` //a concatenação de variáveis vai respeitar os espaços, e quebras de linha

const temp = `Olá ${nome}!` // entre crases eu gero uma expressao string mas dentro dela eu posso gerar outras expressões
console.log(concatenacao, template, temp)

//Expressões

console.log(`1 + 1 = ${1 + 1}`)// inclusive expressões matemáticas
const up = texto => texto.toUpperCase()//coloca o string em CAIXA ALTA
console.log(`Ei... ${up('cuidado')}!`)

