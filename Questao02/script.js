/*Questão 02 - Bhaskara
Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore um método em JS cujo objetivo é resolver a fórmula de Bhaskara. 

Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 

Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.

Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
*/

Bhaskara = (ax2, bx, c) => {
  let delta = bx * bx - 4 * ax2 * c

  if (delta < 0) {
    console.log(delta)
    return console.log('Delta é Negativo.')
  }

  let raiz = Math.sqrt(delta)

  let x1 = (-bx + raiz) / (2 * ax2)
  let x2 = (-bx - raiz) / (2 * ax2)

  let bhaskara = [x1, x2]

  console.log(`O valor de x1 e x2 são: ${baskara}`)
}

Bhaskara(3, -5, 12)
