var resposta = prompt('Digite algum texto: ')

if (resposta === 'sim') {
  alert('Parabens')
} else if (resposta === 'não') {
  var resposta = prompt('Digite outro texto: ')
  alert(resposta)
} else {
  confirm('você tem noção dos seus atos?')
}
