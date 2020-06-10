const pessoa = {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e Orientado a Objetos

const falarDePessoa = pessoa.falar.bind(pessoa)// com o bind a referencia da função falar está referenciada à pessoa
falarDePessoa()

function Pessoa() {
    this.idade = 0

    const self = this
        setInterval(function() {//função que dispara algo em um intervalo de tempo
        self.idade++
        console.log(self.idade) //ctrl + alt + n dispara e ctrl + alt + m para o disparo
    }/*.bind(this)usando o bind ele se refereria ao objeto pessoa*/, 1000) //intervalo de tempo em mls
}

new Pessoa