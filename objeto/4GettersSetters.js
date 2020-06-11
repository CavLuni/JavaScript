const sequencia = {
    _valor: 1, //por convenção o _antes do atributo sugere que o mesmo seja utilizado dentro do objeto
    get valor() {return this._valor++},
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000//por padrão o JS entende quando a chamada é para ler e quando é para alterar o valor do atributo
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)

