/*Questão 03 - Sistema de Notas
Construa um código JS que receba uma valor através de um input para um sistema de notas de uma instituição que possui a seguinte política de classificação: 

* Todo aluno recebe uma nota de 0 a 100. 
* Alunos com nota abaixo de 40 são reprovados. 
* As notas possuem a seguinte regra de arredondamento: 
	* Se a diferença entre a nota e o próximo múltiplo de 5 for menor que 3, arredondar a nota para esse próximo múltiplo de 5. 
	* Se a nota for abaixo de 38, não é feito nenhum arredondamento pois esta nota resulta na reprovação do aluno. 

Por exemplo, a nota 84 será arredondada para 85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou seja, que evite a reprovação do aluno. 
No caso de a nota ser 38, o arredondamento é possível pois atingirá 40 e o aluno será aprovado. 
*/

Consultar = () => {
  const Nota = document.getElementById('Nota')
  const result = document.getElementById('result')
  result.innerHTML = ''

  if (Nota.value > 100 || Nota.value < 0) {
    return alert('Insira a nota entre 0 e 100')
  }

  //   logica das notas
  if (Nota.value < 38) {
    return (result.innerHTML = `Reprovado! 😢`)
  }
  if (Nota.value % 5 == 0) {
    result.innerHTML = `Aprovado!🥳`
  } else if ((parseInt(Nota.value) + 1) % 5 == 0) {
    result.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) + 1
    }`
  } else if ((parseInt(Nota.value) + 2) % 5 == 0) {
    result.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) + 2
    }`
  } else if ((parseInt(Nota.value) - 2) % 5 == 0) {
    result.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) - 2
    }`
  } else if ((parseInt(Nota.value) - 1) % 5 == 0) {
    result.innerHTML = `Aprovado!🥳 Nota arredondada: ${
      parseInt(Nota.value) - 1
    }`
  }
}
