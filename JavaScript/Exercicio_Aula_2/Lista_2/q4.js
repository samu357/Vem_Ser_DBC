var num = 0
var quadrado = 0
for (let i = 0; i < 100; i++) {
  if ((num + i) % 2 === 0) {
    quadrado = Math.pow(i, 2)
    console.log(quadrado)
  }
}
