var listaDeProdutos = [];

var id = 0;

var adicionaProduto = (lista) => {
  var nomeProduto = prompt("Informe o nome do produto");
  var valorProduto = Number.parseFloat(prompt("Valor do Produto: "));
  id += 1;
  lista.push({id: id, nome: nomeProduto, valor: valorProduto});
}

var removeProduto = (lista) => {
  var produtoParaExcluir = Number.parseInt(prompt("informe o codigo do produto que deseja excluir"));
  var novaLista = lista.filter(elemento => elemento.id !== produtoParaExcluir);
  return novaLista;
}

var pesquisaProduto = (lista) => {
  var produtoParaPesquisar = Number.parseInt(prompt("digite o codigo que deseja "));
  var produtoPesquisado = lista.find(elemento => elemento.id === produtoParaPesquisar);
  return produtoPesquisado;
}

var todosOsProdutos = (lista) => lista.forEach(elemento => console.log(elemento));  



var escolhaString = 1 
var escolha = Number.parseInt(escolhaString);



while (escolha !== 5 && escolhaString !== null) {
  escolhaString = prompt('Escolha um opção:\n \n 1 - Para cadastrar um produto\n 2 - Excluir Produto\n 3 - Encontrar Produto\n 4 - Lista de produtos cadastrados\n 5 - Sair');

  escolha = Number.parseInt(escolhaString);


  if ((typeof escolha === 'number' && escolha.toString() !== 'NaN') && (escolha === 1 || escolha === 2 || escolha === 3 || escolha === 4 || escolha === 5)) {
    switch (escolha) {
      case 1:
        adicionaProduto(listaDeProdutos);
        break;
      case 2:
        listaDeProdutos = removeProduto(listaDeProdutos);
        break;
      case 3:
        console.log(pesquisaProduto(listaDeProdutos));
        break;
      case 4:
        todosOsProdutos(listaDeProdutos);
        break;
    }
  } else {
    console.log('opção Invalida');
  }
}