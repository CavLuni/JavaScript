const ferrari = {
    modelo: 'F40',
    velMax: 324
}
const volvo = {
    modelo: 'V40',
    velMax: 200
}
console.log(ferrari.__proto__)// é a maneira de acessar o protótipo ou o objeto mãe
console.log(ferrari.__proto__ === Object.prototype)//Object.prototype é o prototipo do objeto
console.log(volvo.__proto__ === Object.prototype)