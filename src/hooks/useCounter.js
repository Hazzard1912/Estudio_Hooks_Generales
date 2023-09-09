import { useState } from "react";
/**
 * Usualmente los custom hooks que creamos hacen uso de otros hooks
 * de react. El truco es que podemos definir el comportamiento
 * de la funcion de manipulacion de estado, y retornar el objeto
 * como queremos mas la funcion de manipulacion.
 * @returns
 */

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  const decrement = (value = 1) => {
    if (counter - value < 0) {
      return;
    }
    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
