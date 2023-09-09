import React from "react";

export const ShowIncrement = React.memo(({ increment, decrement }) => {
  /**
   * Este boton tiene un comportamiento erratico, en el sentido
   * de que se vuelve a renderizar a pesar de que en si, nada
   * cambia.
   *
   * En el fondo, este boton depende de una funcion que recibe
   * a traves de las props. Ahi esta la explicacion del por que
   * se vuelve a generar, y es que las funciones, cada vez que
   * se genera un componente, apuntan a direcciones de memoria
   * diferentes.
   *
   * Lo que sucede entonces es que en el componente padre, al
   * volverse a renderizar el componente porque su estado se
   * actualizo (para este ejemplo el counter), como tenemos la
   * funcion dentro de el, esta tambien se vuelve a generar, luego
   * la funcion que recibio este componente en un tiempo x es
   * diferente a la recibida en el tiempo x + 1 pues apunta a
   * direcciones de memoria diferentes.
   *
   * Luego, ocupamos no solamente usar el memo que envuelve nuestro
   * componente, sino tambien crear una funcion a partir del hook
   * useCallback para que se memorice la funcion
   */

  console.log("Me volvi a generar...");

  return (
    <>
      <button className="btn btn-primary" onClick={() => increment()}>
        Incrementar
      </button>

      {/* Usando argumentos */}
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        Decrementar
      </button>
    </>
  );
});

ShowIncrement.displayName = "ShowIncrement";
