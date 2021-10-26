var salInicial = 1000
var aumento = 0.015
var salNovo = 0

for (let i = 2016; i <= 2021; i++) {
  salNovo = salInicial + salInicial * aumento
  aumento = aumento * 2
}
console.log(salNovo)
