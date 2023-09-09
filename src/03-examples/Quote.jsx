import { useLayoutEffect, useRef, useState } from "react";

/**
 * Este es un hook un tanto extraño, y tal vez este no sea el mejor
 * ejemplo para mostrar su utilidad, porque podemos lograr lo
 * mismo con el useEffect (ademas de que es recomendado que se
 * use el useEffect siempre que sea posible por sobre el useLayoutEffect)
 *
 * En general, useLayoutEffect es útil en situaciones donde 
 * se necesita realizar cambios en el DOM de manera síncrona 
 * antes de que se produzca el repintado. Sin embargo, se debe
 * usar con precaución, ya que puede bloquear el hilo principal
 * del navegador y afectar el rendimiento si no se utiliza de
 * manera adecuada.
 */

export const Quote = ({ quote, author }) => {
  const paragraphRef = useRef();

  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { width, height } = paragraphRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height,
    });
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={paragraphRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <h5>{JSON.stringify(boxSize)}</h5>
    </>
  );
};
