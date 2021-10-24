var isFriday = confirm('Hoje é sexta-feira?')
var isTwoGreaterThanFour = 2 > 4
isTwoGreaterThanFour = true

var isValueEmpty = prompt('Digite alguma coisa')
if (
  isValueEmpty !== null &&
  isValueEmpty !== undefined &&
  isValueEmpty !== '0'
) {
  alert('digite alguma coisa')
} else alert('Digite um valor válido')
