import { useCallback, useState } from "react";
import { Hijo } from "./Hijo";

export const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

//   const incrementar = (num) => {
//     setValor(valor + num);
//   };
  
  /**
   * Esta solucion es la que hace que el codigo funcione bien.
   * Nuevamente, hay que entender que lo que queremos lograr es
   * que a pesar de que haya un cambio en el estado de este 
   * componente, la funcion siga siendo la misma, de modo que,
   * como las instancias de componente hijo dependen de la 
   * funcion que estamos pasando, y como en ellas usamos el 
   * React.memo para evitar que se re-rendericen, al siempre
   * pasarles la misma funcion, no se van a re-renderizar, pero
   * si no usaramos el useCallback, cada vez que hay un cambio
   * en este componente se creara nuevamente la funcion y se 
   * asignara a un nuevo espacio en memoria, luego, como dos
   * funciones aunque sean iguales, si estan en dos espacios
   * de memoria diferentes ya no se consideran iguales, esto
   * llevaria a que Reac.memo no pudiese evitar la re-renderizacion
   * de los componentes hijos.
   */
  
  const incrementarPadre = useCallback((num) => {
    setValor((state) => state + num);
  }, []);

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={incrementarPadre} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};
