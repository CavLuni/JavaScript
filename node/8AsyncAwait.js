const http = require('http')
const { callbackify } = require('util')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise ((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''

            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

//Objetivo é simplificar o uso de promises ...

let obterAlunos = async () => { //necessário marcar a função com async
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}// retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a=> a.nome))
    .then(nomes => console.log(nomes))