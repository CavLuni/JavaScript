// par nome/valor
const saudacao = 'Opa' //contexto léxico = em qual escopo ele foi definido

function exec(){
    const saudacao = 'Falaaa'//contexto léxico da função
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: "Rua muito legal",
        numero:123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)