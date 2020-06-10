const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break // ele para e sai da estrutura de repetição
    } 
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if(y == 5) {
        continue // ele não vai executar o item 5 mas vai continuar executando a repetição
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if (a == 2 && b ==3) break externo// referencia a interromper o laço externo e não o mais próximo
        console.log(`Par = ${a}, ${b}`)
    }
}