import { useRef } from "react";

export const FocusScreen = () => {
  /**
   * El useRef nos permite establecer una referencia a un objeto
   * o elemnto del DOM, para fines de ejemplo, en este caso el 
   * input. De modo que podamos acceder a ese objeto facilmente
   * sin tener que renderizar.
   */

  const inputRef = useRef();

  const onClick = () => {
    // document.querySelector("input").select();
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Ingrese su nombre"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set focus
      </button>
    </>
  );
};
