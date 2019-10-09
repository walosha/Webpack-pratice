export class ComponentServices {
  numberOneInput = document.getElementById("numberOne");
  numberTwoInput = document.getElementById("numberTwo");
  addValuesButton = document.getElementById("addValues");
  resultDiv = document.getElementById("result");
  errorBox = document.getElementById("error");

  getInputs = () => {
    return [this.numberOneInput.value, this.numberTwoInput.value];
  };

  setResult = str => {
    this.resultDiv.innerText = str;
  };

  onClick = cb => {
    this.addValuesButton.addEventListener("click", cb);
  };
}
