var listaColaboradores = [];
var listaProjeto = [];

/* ------------- CLASSES ----------*/ 
class Marcacao {
  dia = 0;
  hora = 0;
  
  constructor(dia, hora) {
    this.dia = dia;
    this.hora = hora;
  }
}


class Projeto {
  titulo = '';
  id = 0;
  colaboradoresAlocados = [];
  
  constructor(id, titulo) {
    this.id = id;
    this.titulo = titulo;
  }
}

class Colaborador {
  id = 0;
  nome = '';
  marcacaoPonto = [];
  codpjt = 0;

  constructor(id, nome) {
    this.id = id;
    this.nome = nome;
  }

  marcarPonto(dia, hora) {
    this.marcacaoPonto.push(new Marcacao(dia, hora));
  }
}

/* ---------- AÇÃO DO USUARIO ---------*/
var selecioneString = 1;
var selecione = Number.parseInt(selecioneString);

while (selecione !== 9 && selecioneString !== null) {
  selecioneString = prompt('Olá, Informe a ação desejada:\n 1 - Cadastrar colaborador\n 2 - Cadastrar projeto\n 3 - Alocar colaborador a um projeto\n 4 - Remover colaborador\n 5 - Marcar Ponto\n 6 - Ver lista de colaboradores sem projeto\n 7- Ver lista de projetos sem colaboradores\n 8 - Ver colaboradores que ainda não marcaram o ponto\n 9 - Sair');
  
  selecione = Number.parseInt(selecioneString);
  
  if ((typeof selecione === 'number' && selecione.toString() !== 'NaN') && (selecione === 1 || selecione === 2 || selecione === 3 || selecione === 4 || selecione === 5 || selecione === 7 || selecione === 8 || selecione === 9)) {

    switch (selecione) {
      case 1: // cadastrar colaborador (usar push())

        var idColaborador = 0;
        var adicionaColaborador = (lista) => {
          var nomeColaborador = prompt("Informe o nome do Colaborador");
          lista.push(new Colaborador(nomeColaborador, idColaborador));
          idColaborador++;
        }

        adicionaColaborador(listaColaboradores); // no caso eu faço as classes aqui dentro do switch ou deixo fora?
        break;

      case 2: // cadastrar projeto (usar push())

        var idProjeto = 0;
        var adicionaProjeto = (lista) => {
          var nomeProjeto = prompt("Informe o nome do Projetp");
          lista.push(new Projeto(nomeProjeto, idProjeto));
          idProjeto++;
        }

        adicionaProjeto(listaProjeto);
        console.log(listaProjeto);
        break;

      case 3: // adicionar colaborador no projeto (usar find())

        break;

      case 4: // remover colaborador do projeto (usar filter())

        break;

      case 5: // marcar ponto do colaborador 

        break;

      case 6: // colaboradores sem projeto

        break;

      case 7: // projeto sem colaboradores

        break;

      case 8: //colaboradores sem pontos;

        break;

    }
  } else {
    console.log('Opcão Invalida');
  }
}
