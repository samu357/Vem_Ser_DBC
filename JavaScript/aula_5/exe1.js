/*  Crie uma função que recebe um aluno e adiciona esse aluno à uma lista de alunos (nome, idade) {nome: "aaa", idade: 55} 
    crie uma função que recebe um nome e retorne o aluno que tiver aquele nome (Find) */ 

    var alunos = [{nome: 'samu', idade: 23, matricula: 01},{nome: 'joao', idade: 20, matricula: 02},{nome: 'eduardo', idade: 22, matricula: 03}]

    var martricula = aluno =>{
       alunos.push(aluno)
    }

    var aluno = alunos.find(aluno => aluno.nome == 'samu');
    console.log(aluno)
    //var aluno = alunos.find(aluno => aluno.idade == '20');

    