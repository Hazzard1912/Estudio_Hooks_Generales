import { useState } from "react";

export const CounterApp = () => {
  /**
   * Tenemos que pensar en todas las posibilidades que nos brinda
   * el tener el useState. No solo nos sirve para primitivos,
   * logicamente, se usa como ejemplo para comprender como se usa
   * un hook para manipular el estado de algo que cambia y se debe
   * de renderizar en nuestra app (recordemos que para React, lo
   * unico que le sirve para saber si algo se debe re-renderizar es
   * que haya tenido un cambio, pero los cambios directos sobre la
   * variable no son validos, asi que usamos hooks para retornar otro
   * objeto o valor, y de esta forma obligar la renderizacion)
   *
   * Por lo tanto, podemos usar facilmente el useState con objetos
   * arreglos, entre otros.
   */
  //   const [counter, setCounter] = useState(10);
  const [state, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />

      {/* Fijarse en el evento onClick. Note que el setCounter debe
        de retornar un objeto que cumpla con la misma estructura del
        objeto que representa nuestro estado. por eso pasamos como
        argumento un objeto ( {} ). setCounter espera que ese objeto
        tenga las propiedades counter1, counter2 y counter3. Ahi debemos
        de implementar la logica de que es lo que queremos actualizar. 
        
        Note que tambien podemos servirnos del operador spread (...) 
        para lograrlo.
        */}
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            counter1: counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
