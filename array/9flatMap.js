const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Denis',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 9.3 
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
   
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

Array.prototype.flapMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flapMap(getNotasDaTurma)
console.log(notas2)