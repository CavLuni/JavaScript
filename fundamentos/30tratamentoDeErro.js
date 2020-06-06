function tratarErroELancar(erro) { // erro que é tratado no catch cai e é mostrado no throw
    throw new Error ('Deu Ruim')
}


function imprimirNomeGritado(obj) {
    try {// se existir um erro no bloco ele captura e trata no catch
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
    tratarErroELancar(e)
    } finally { // continua e executar o código mesmo depois de um erro
        console.log('final')
    }
}
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj)