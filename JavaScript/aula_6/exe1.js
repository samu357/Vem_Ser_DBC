// function teste(x){
//   return x;
// }

class Pet {
  nome = '';
  raca = '';
  tutor = '';

  constructor(nome, raca, tutor,) {
    this.nome = nome;
    this.raca = raca;
    this.tutor = tutor;

  }
  miarLatir() {
    console.log(`Olá meu nome é ${this.nome}, minha raça é ${this.raca}, e o meu dono é o sr(a) ${this.tutor}`)
  }
}

const alasca = new Pet ('Alasca', 'boxer', 'samuel');
alasca.miarLatir();

