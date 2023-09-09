import { useEffect, useState } from "react";

export const Message = () => {
  //   useEffect(() => {
  //     console.log("Message Mounted");

  //     return () => {
  //       // Cuando el componente se destruye
  //       console.log("Message unmounted");
  //     };
  //   }, []);

  const [coords, setCoords] = useState({ x: 0, y: 0 });

  /**
   * Ejemplo de como realizar una limpieza de listener en nuestros
   * effect, usando la funcion de retorno (tener en cuenta que
   * la usamos ya que esta se ejecuta una vez el componente se
   * destruye, una especie de destructor de clase).
   */

  useEffect(() => {
    const onMouseMove = ({ x, y }) => {
      setCoords({ x, y });
    };

    /**
     * En lugar de tener esto, creemos una funcion fuera del
     * evento y luego la usamos en el (en lugar de ser anonima).
     * Esto con el objetivo de poder tener una referencia a ella
     */
    // window.addEventListener("mousemove", (event) => {
    //   console.log(event.x, event.y);
    // });

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      /**
       * Para esto necesitamos tener la funcion creada. Si usasemos
       * una funcion anonima, se crearia un nuevo espacio en
       * memoria que no podremos referenciar dentro de este return,
       * de modo que perderiamos el poder removerlo.
       */
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
      {JSON.stringify(coords)}
    </>
  );
};
