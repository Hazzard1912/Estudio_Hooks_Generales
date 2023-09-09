import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />
    {/* No olvidar que al tener el evento onCLick, o cualquier otro evento
    que venga del html, lo que sucede es que estamos enviando esto:
    onClick = {(event) => funcion(event)}. Esto usualmente lo 
    representamos como onCLick ={funcion}, de modo que cuando 
    hacemos algo como esto:
    onClick={funcion(algo)}, ese algo corresponde al evento, y 
    esto no es lo que queremos, pues necesitamos es obtener como
    argumento en este caso un numero, para lograrlo entonces 
    ignoramos el event y en el llamado a la funcion si pasamos el
    valor numerico:
    onClick={(event) => funcion(2)}, que se puede simplificar a
    onClick={() => funcion(2)}*/}
      <button className="btn btn-primary" onClick={() => increment(2)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-primary" onClick={() => decrement(3)}>-1</button>
    </>
  );
};
