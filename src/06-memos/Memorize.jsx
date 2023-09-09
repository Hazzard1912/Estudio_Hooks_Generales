import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const [show, setShow] = useState(true);

  const { counter, increment } = useCounter(10);

  return (
    <>
      <h1>
        Counter: <Small counter={counter} />
      </h1>
      <hr />
      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      {/* Este cambio en el componente padre no deberia de hacer
      que se vuelva a renderizar el hijo. (Note que este cambio
      en show no tiene nada que ver con el componente Small) 
      
      Para esto usamos el memo (de Memorize), aunque el equipo 
      de react dice que no es necesario hacerlo siempre, solo 
      cuando uno note que el componente hijo realiza alguna tarea
      pesada que consuma una cantidad considerable de recursos*/}
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
