//variavéis
let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let xAttemps = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

//funcões callback
function handleTryClick(event) {//event deve ser colocado tb no HTML com o onclick
  event.preventDefault()//cancela a acão padão de carregamento de página
  const inputNumber = document.querySelector("#inputNumber")// faz a pesquisa pelo seletor

  if (Number(inputNumber.value) == randomNumber) {//value pega o valor do input
    toogleScreen()
    screen2.querySelector("h2").innerText = `You gotta ${xAttemps} attempts.`
  }
  inputNumber.value = ""
  xAttemps++//adiciona número
}

function handleResetClick() {
  toogleScreen()
  randomNumber = Math.round(Math.random() * 10)
  xAttemps = 1
}

function toogleScreen() {
  screen1.classList.toggle("hide")//alterna a classe hide
  screen2.classList.toggle("hide")// alterna a classe hide
}


