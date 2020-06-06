{{{{ var sera = 'Será'}}}}

{
    {
        {
            {
                 var sera = 'Será' //a variável var será visivel também fora do seu bloco
                 console.log(sera)
            }
        }
    }
}
console.log(sera)

function Teste() {
    var local = 123 // uma var definida dentro de uma função, ficará visivel apenas para a mesma
    console.log(local)
}
//console.log(local) dará not defined

// se eu tiver uma variável global ela pode ser facilmente sobrescrita, utilizar const global
var numero = 1
{
    var numero = 2
    console.log('dentro = ', numero)
}
console.log('fora = ', numero)