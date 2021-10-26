var num = 0
var quadrado = 0
for (let i = 100; i >= 0; i--) {
  if ((num + i) % 2 === 1) {
    quadrado = Math.pow(i, 2)
    console.log(quadrado)
  }
}
