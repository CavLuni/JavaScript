const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [19, 9, 7, 5]
console.log(n1, n3, n5, n6)

function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955}))

function rand1([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(rand1([50, 40]))
