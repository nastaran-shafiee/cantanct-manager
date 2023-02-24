import { ChangeEvent, useState } from "react";

const useInput = (
  validValue: (a: string) => boolean | RegExpMatchArray | null
) => {
  const [entredValue, setEntredValue] = useState(" ");
  const [fucus, setfucus] = useState(false);
  const valueIsValid = validValue(entredValue);
  const setError = !valueIsValid && fucus;
  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEntredValue(event.target.value);
  };

  const BlurHandler = (event: boolean) => {
    setfucus(true);
  };

  const reset = () => {
    setEntredValue(" ");
    setfucus(false);
  };
  const valueE = (value: string) => {
    setEntredValue(value);
  };

  return {
    value: entredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    reset,
    valueE,
    BlurHandler,
    setError,
  };
};

export default useInput;
