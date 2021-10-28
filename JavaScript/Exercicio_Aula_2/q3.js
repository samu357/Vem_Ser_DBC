var opcao = 1

while (opcao !== 2) {
  opcao = parseInt(
    prompt(
      'informe a opcao desejada: \n 1 - contimuar perguntando \n 2 - parar'
    )
  )

  if (opcao !== 1 && opcao !== 2) {
    alert('opcao invalida')
  }
}
