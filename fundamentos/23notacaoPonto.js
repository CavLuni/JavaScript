console.log(typeof console)// com o ponto eu acesso as funções de um objeto, bem como seus atributos
console.log(Math.ceil(6.1)) //arredonda para cima

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' sobscreveria o atributo anterior
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {//this torna o atributo público
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()//acessa a função pelo ponto
