const pessoa = {
    nome: 'Rebeca',
    idade: 12,
    peso: 36
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.defineProperty(pessoa, 'dataNascimento', {//Define uma propriedade para um atributo
    enumerable: true,//passivel ser listada
    writable: false,//pode ser alterada
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

//Object.assign (ECMScript 2015)
const dest = {a: 1}
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)//sobrescreve os dados de destino anteriores bom para update

Object.freeze(obj)// congela o objeto não permitindo alterações
obj.c = 1234
console.log(obj)
