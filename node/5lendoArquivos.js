const fs = require('fs')

const caminho = __dirname + '/5arquivo.json' //__dirname quer dizer diretório atual

//lendo de forma sincrona... não recomendado pois se for um arquivo pesado vai travar o tráfego de requisições
const conteudo = fs.readFileSync(caminho, 'utf-8')// ler arquivo de forma sincrona
console.log(conteudo)

//assincrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./5arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})