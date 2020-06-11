function MeuObjeto() {}
    console.log(MeuObjeto.prototype)

    const obj1 = new MeuObjeto
    const obj2 = new MeuObjeto
    console.log(obj1.__proto__===obj2.__proto__)//objetos criados a partir de uma função, herdam prototype da função e não do Object
    console.log(MeuObjeto.prototype === obj1.__proto__)

    MeuObjeto.prototype.nome = 'Anonimo'
    MeuObjeto.prototype.falar = function() {
        console.log(`Bom dia! Meu nome é ${this.nome}!`)
    }
    obj1.falar()

    obj2.nome = 'Denis'
    obj2.falar()

    const obj3 = {}
    obj3.__proto__ = MeuObjeto.prototype
    obj3.nome = 'Obj3'
    obj3.falar()

    // na cadeira de herança, um objeto criado a partir de uma função, vai ter como prototipo function.prototype
    // que por sua vez terá um Object.prototype como seu protótipo, que será o topo da hierarquia