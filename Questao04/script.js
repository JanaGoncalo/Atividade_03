/* Questão 04 - LuidyMoura
Criar um método que irá receber um valor inteiro como argumento e retornar um array com uma contagem até o argumento como limite.

Quando o número for divisível por 5, deve-se substituir o número pela String “ Luidy” e caso o número seja divisível por 9, deve-se substituir o número por  “Moura”.
Se o número for divisível por ambos deve-se colocar “LuidyMoura”.

Exemplo de retorno:

Entrada:
45

Saída:
1, 2, 3, 4, Luidy, 6, 7, 8, Moura, Luidy, 11, 12, 13, 14, Luidy, 16, 17, Moura, 19, Luidy, 21, 22, 23, 24, Luidy, 26, Moura, 28, 29, Luidy, 31, 32, 33, 34, Luidy, Moura, 37, 38, 39, Luidy, 41, 42, 43, 44, LuidyMoura.
 */

let tamanhoArray = document.getElementById('tamanhoArray')
let btnFormar = document.getElementById('contArray')
let resposta = document.getElementById('resposta')
let luidyArray = []
let tamanho = Number.parseInt(tamanhoArray.value)

btnFormar.onclick = () => contArray(tamanhoArray.value)

function contArray(tamanho) {
  luidyArray.splice(0, luidyArray.length)

  for (i = 1; i <= tamanho; i++) {
    if (i % 5 == 0 && i % 9 == 0) {
      luidyArray[i - 1] = 'LuidyMoura'
    } else if (i % 5 == 0) {
      luidyArray[i - 1] = 'Luidy'
    } else if (i % 9 == 0) {
      luidyArray[i - 1] = 'Moura'
    } else {
      luidyArray[i - 1] = i
    }
  }
  resposta.innerText = luidyArray
}
