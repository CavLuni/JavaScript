//usando a notação literal != de JSON
 const carro = {}
 console.log(carro)

 //Object em JS
 console.log(typeof Object, typeof new Object)

 //Funçoes construtoras
 function Produto (nome, preco, desc) {
     this.nome = nome,
     this.preco = preco,
     this.desc = desc
 }
 const p1 = new Produto('Borracha', 7.99, 0.15)
 const p2 = new Produto('Caneta', 7.99, 0.15)

 console.log(p1)
 console.log(p2)

 //Função Factory
 function criarFuncionario(nome, salarioBase, faltas){
     return {
         nome,
         salarioBase,
         faltas,
         getSalario() {
             return (salarioBase / 30) * (30 - faltas)
         }
     }
 }

 const f1 = criarFuncionario('João', 7980, 4)
 const f2 = criarFuncionario('Denis', 37980, 1)
 console.log(f1, f1.getSalario(), f2, f2.getSalario())

 //Object.create
 const filha = Object.create(null)
 filha.nome = 'Ana'
 console.log(filha)

 //Uma função famosa que retorna Ojeto (Json)
 const fromJson = JSON.parse('{"info": "Sou um JSON"}')
 console.log(fromJson.info)