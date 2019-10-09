import { inputsAreValid } from "./utils/inputsAreValid";
import { parseInputs } from "./utils/parseInputs";

export const run = (alertServices, componentServices) => {
  alertServices.hideErrors();
  componentServices.onClick(() => {
    alertServices.hideErrors();
    const inputs = componentServices.getInputs();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parsedInputs)) {
      const [numA, numB] = parsedInputs;
      componentServices.setResult(numA + numB);
    } else {
      componentServices.setResult("");
      alertServices.handleAdditionError(inputs, parsedInputs);
    }
  });
};
