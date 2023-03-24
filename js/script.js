// import { modal } from './modal.js';
import { alertError } from './alert-error.js';
import { calculateIMC, notNumber, displayResultMessage } from "./utils.js";

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

inputWeight.oninput = () => alertError.close()
inputHeight.oninput = () => alertError.close()
form.onsubmit = e => {
  e.preventDefault();
  
  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber){
    alertError.open()
    return;
  }


  alertError.close()

  const result = calculateIMC(weight, height)
  
  displayResultMessage(result)
}