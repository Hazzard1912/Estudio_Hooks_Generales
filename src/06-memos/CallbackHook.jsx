import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //   const increment = () => {
  //     setCounter(counter + 1);
  //   };

  /**
   * Ahora tenemos una funcion memorizada.
   * Note que debemos usar el value => value + 1 en lugar del
   * setCounter(counter + 1) porque, al memorizarse la funcion, es
   * decir, al mantenerse constante, el valor de counter siempre
   *  va a ser 10, entonces en lugar de usar counter hacemos algo
   * similar a un reduce en el que definimos el nuevo estado a
   * partir del estado actual.
   */
  const incrementFather = useCallback(() => {
    setCounter((value) => value + 1);
  }, []);

  // Con argumentos
  const decrementFather = useCallback((value) => {
    setCounter((state) => state - value);
  }, []);

  return (
    <>
      <h1>Callback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} decrement={decrementFather} />
    </>
  );
};
