let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}
dobro = a => 2 * a// na Function Arrow de uma linha só o return está implicito
console.log (dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

ola = () => 'Olá' // () vazio quer dizer que não tem parâmetro
ola = _ => 'Olá'// _ quer dizer que tem um parâmetro mas que pode ser ignorado na chamada

console.log(ola)
console.log(ola())
/*
function Pessoa(){
    this. idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
new Pessoa*/

let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)// na função Arrow o this se refere ao contexto da função idependente de quem chama
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)// forçando a mudança de contexto com bind, mas não funciona
comparaComThisArrow(obj)