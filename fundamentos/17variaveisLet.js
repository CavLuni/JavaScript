let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)// let tem escopo separado para global, bloco e função
}
console.log('fora =', numero)