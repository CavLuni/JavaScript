console.log(soma(3, 4)) // Posso chamara uma function declaration mesmo antes da sua notação, pq o JS carrega primerio as funçoes declaration antes do código

//function declaration
function soma(x, y) {
    return x + y
}

// function expression

const sub = function (x, y) {
    return x - y // no caso da expression eu só posso chamar ela depois, pois está armazenada numa constante e essa constante só passa a existir a partir deste ponto
}
// named function expression
const mult = function mult(x, y) {
    return x * y // comportamento igual ao do expression
}