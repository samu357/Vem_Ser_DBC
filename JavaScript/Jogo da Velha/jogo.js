const square = document.querySelectorAll(".square"); // verificando se os quadrados do tabuleiro estão sendo selecionadp

const title = document.getElementById(".title");
const playerX = document.getElementById(".playerX");
const playerO = document.getElementById(".playerO");
const btRecomeca = document.getElementById(".btRecomeca");

let verificarMarcacao = true;

const player1 = "X";
const player2 = "O";


const combinacoesVitoria = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 5, 9],
  [7, 5, 3],
  [3, 6, 9],
  [2, 5, 8],
  [1, 4, 7],
]

document.addEventListener('click', (event) => {
  if(event.target.matches('.square')){
    play(event.target.id);
  }
});

function play(id){
  const square = document.getElementById(id);
  verificar = verificarMarcacao ? player1 : player2;
  square.textContent = verificar;
  verificarMarcacao =! verificarMarcacao;
}
