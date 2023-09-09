import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

/**
 * Si trata de usar este componente notara que, primeramente, la
 * operacion del mismo es bastante lenta, y, mas importante, que
 * esta operacion pesada se ejecutara aun si el boton que
 * presionamos no es el de incrementar, lo cual no tiene sentido,
 *
 * Para solucionar esto usamos el memo como Hook
 */

const heavyStuff = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("Ahi vamos...");
  }

  return `${iterationNumber} numero de iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  // Esto nos soluciona todo.
  /**
   * Para explicarlo un poco, estamos renderizando el memorizedValue,
   * este memorized value usa el memo para establecer un valor inicial,
   * el cual en este ejemplo es obtenido al ejecutar la funcion
   * heavyStuff pasandole el valor inicial de counter como argumento.
   * y luego, solo se actualizara en dependencia de si el counter
   * o bien el estado del counter cambia, no el estado de todo el
   * componente como sucedia anteriormente.
   */
  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter: <small>{counter}</small>
      </h1>
      <hr />
      
      <h4>{memorizedValue}</h4>

      {/* Esto es terrible, se ejecutara cuando haya cualquier
      cambio en el estado del componente, no solo del counter como
      se supondria. */}
      {/* <h4>{heavyStuff(counter)}</h4> */}

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
