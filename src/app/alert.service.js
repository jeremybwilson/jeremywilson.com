import { inputsAreValid } from "./utils/inputs-are-valid";
export class AlertService {
  constructor() {
    this.errorBox = document.getElementById("error");
  }

  handleAdditionError(inputs, numbers) {
    const fullMessage = inputs.reduce((message, str, index) => {
      if (inputsAreValid(numbers[index])) {
        return message + "Success";
      } else {
        if(str !== ''){
          return message + `${str} is not a number. `;
        } else {
          // define message text for when string is empty
          const errorMessage = `Something is wrong.  Please enter a valid number in both fields.`;
          return errorMessage;
        }
      }
    }, "Please enter two valid numbers! ");

    this.errorBox.classList.remove("invisible");
    this.errorBox.innerText = fullMessage;
  }

  hideErrors() {
    this.errorBox.classList.add("invisible");
  }
}
