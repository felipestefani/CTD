const aluno = require('./aluno');

curso = {
    nome_do_curso: 'DH Club',
    nota_de_aprovacao: 8,
    faltas_maximas: 3,
    lista_estudantes: aluno.lista_alunos,
    adicionar_estudante: function(nome, quantidade_de_faltas, notas){
        let novo_aluno = aluno.novoAluno(nome,quantidade_de_faltas, notas);
        this.lista_estudantes.push(novo_aluno);
    },
    eh_aprovado: function(nome){
        for(i = 0; i < this.lista_estudantes.length; i++) {
            if (this.lista_estudantes[i].nome == nome){
                if (this.lista_estudantes[i].calcularMedia() >= this.nota_de_aprovacao*1.1 && this.lista_estudantes[i].quantidade_de_faltas == this.faltas_maximas){
                    return true;
                } else if (this.lista_estudantes[i].calcularMedia() >= this.nota_de_aprovacao && this.lista_estudantes[i].quantidade_de_faltas < this.faltas_maximas) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    lista_aprovados: function(array){
        let lista_aprovacao = [];
        for(estudante of array){
            lista_aprovacao.push(this.eh_aprovado(estudante.nome))
        }
        return lista_aprovacao;
    }
}

//calcula media de um estudante pelo objeto aluno diretamente
console.log(aluno.calcularMedia('Joana'));

//adiciona faltas pelo objeto aluno
console.log(aluno.faltas('Felipe'));

//adiciona um estudante por meio do objeto curso
//e mostra a lista com o estudante adicionado
curso.adicionar_estudante('Lucas', 1, [ 9,9,10]);
console.log(curso.lista_estudantes);

//verifica a aprovação de um estudante do curso
console.log(curso.eh_aprovado('Marlene'))

//verifica a lista de aprovados/reprovados do curso
console.log(curso.lista_aprovados(curso.lista_estudantes))
