import { modal } from './modal.js';

export function calculateIMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export function notNumber(value) {
  return isNaN(value) || value == ""
}

export function displayResultMessage(result) {
  let rate = ""
  
  if (result < "18.5") {
    rate = "Abaixo do peso normal."
  } else if (result >= "18.5" && result < "25") {
    rate = "Peso normal."
  } else if (result >= "25" && result < "30") {
    rate = "Excesso de peso."
  } else if (result >= "30" && result < "35") {
    rate = "Obesidade classe I."
  } else if (result >= "35" && result < "40") {
    rate = "Obesidade classe II (severa)."
  } else if (result >= "40") {
    rate = "Obesidade classe III (mórbida)."
  }

  const message = `Seu IMC é de ${result}.`

  const rateMessage = `Classificação: ${rate}`
  
  modal.message.innerText = message
  modal.IMCClass.innerText = rateMessage
  modal.open()
}