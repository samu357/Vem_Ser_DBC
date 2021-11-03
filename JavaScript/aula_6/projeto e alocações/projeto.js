class Marcacao{
  dia = '';
  hora = 0;

  constructor(dia, hora){
    this.dia = dia;
    this.hora = hora;
  }
}

class Colaborador{
  id = 0;
  nome = '';
  codProjeto = 0;
  marcacoesPonto = [];



  constructor(id, nome, codProjeto, marcacoesPonto){
    this.id = id;
    this.nome = nome;
    this.codProjeto = codProjeto;
    this.marcacoesPonto = marcacoesPonto !== && marcacoesPonto !== undefined;

  }

  marcarPonto ( d , h ){
    const marcacaoCriada = new Marcacao( dia, hora);
    this.marcacoesPonto.push(marcacaoCriada);
  }

};

class Projeto{
  id = 0;
  titulo = '';
  colaboradoresAlocados = [];

  constructor(codigo, titulo,colaboradoresAlocados){
    this.codigo = codigo;
    this.titulo = titulo;
    this.colaboradoresAlocados = colaboradoresAlocados;

  }
};

let listaDeColaboradores = [];
let listaDeProjetos = [];
let idAtualProjeto = 0;
let idAtualColaborador

const cadastrarColaborador = () => {
  let nomeColaborador = prompt('informe o nome do colaborador');
  idAtualColaborador++;
  let colaborador = new Colaborador(nomeColaborador, idAtualColaborador);
  listaDeColaboradores.push(colaborador);
}


const cadastrarProjeto = () => {
  let nomeProjeto = prompt('informe o nome do projeto');
  idAtualProjeto++;
  let projeto = new Projeto(tituloProjeto, idAtualProjeto);
  listaDeColaboradores.push(Projeto);
  console.loh('Projeto cadastrado => ', projeto);
}


const alocarColaborador = () => [
  let idColaborador = parseInt(prompt("informe o id do colaborador"));
  let idProjeto = parseInt(prompt("informe o id do projeto"));

  let colaborador = listaDeColaboradores.fing(c => c.id === idColaborador);
  let projeto = listaDeProjetos.find(p = > p.id === idProjeto);

  console.log("colaborador alocado" => colaborador)
  console.log("Projeto " => colaborador)

]





// ---------------- M E N U 

const menu = () => {
  let opcao = prompt(
    'As opções serão \n 1 - Cadastrar Colaborador\n 2 - Cadastrar Projeto\n 3 - Alocar Colaborador; (à algum projeto)\n 4 - Desalocar Colaborador\n 5 - Marcar Ponto\n 6 - Ver Lista de Colaboradores Sem Projeto\n 7 - Ver Lista de Projetos Sem Colaboradores\n 8 - Ver Lista de Colaboradores Que Ainda Não Marcaram o Ponto\n 9 - Encerrar Execução do Sistema');

    switch(opcao){
      case '1':
        cadastrarColaborador();
        menu()
        break;
      case '2':
        menu()
        break;
      case '3':
        menu()
        break;
      case '4':
        menu()
        break;
      case '5':
        menu()
        break;
      case '6':
        menu()
        break;
      case '7':
        menu()
        break;
      case '8':
        menu()
        break;
      case '9':
        menu()
        break;


    }
}














