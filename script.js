/*
  ** Jogo da advinhação **

  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie um lógica para gerar um número aleatório 
  e verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.

  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente:"

  Caso o usuário acerte o número, apresentar a mensagem:
  "Parabéns! Você advinhou o número em x tentativas"

  Substitua o "x" da mensagem, pelo número de tentativas
*/

let numberGuess = prompt("Do you can guess number? it´s between 0 and 10.")
let randomNumber = Math.round(Math.random() * 10)// Gera o número aleatório

let attempts = 1;

while ( Number(numberGuess) != randomNumber) { 
numberGuess = prompt("Wrong, let´s try again!")
attempts++
}

alert(`Congratulations! The number is ${randomNumber} and you guess at ${attempts} attempts!`)

