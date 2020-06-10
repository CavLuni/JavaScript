function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido: ${area}m2.`)
    } else{
        return area
    }
}
console.log(area(2, 2))
console.log(area(2))
console.log(area(2, 3, 17, 22, 44))// se for passado mais parâmetros ele vai pegar apenas os 2 primeiros mas não vai dar erro
console.log(area(5, 5))