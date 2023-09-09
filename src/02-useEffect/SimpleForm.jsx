import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "jhonnier",
    email: "jhonnier@test.com",
  });

  /**
   * De esta forma podemos acceder tanto al valor que se esta
   * recibiendo como el nombre del elemento que esta cambiando,
   * que definimos mediante el atributo name de cada input.
   *
   * Esto lo podemos entonces desestructurar y hacer asi un
   * codigo mas simple
   */
  // const onInputChange = (event) => {
  //   console.log(event.target.value);
  //   console.log(event.target.name);
  // };

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  /**
   * El useEffect sigue esta estructura:
   * en el first va la funcion, y el second en el return, tiene
   * sentido cuando en el first creamos una subscripcion, por
   * ejemplo. De modo que el second corresponde a la limpieza
   * de memoria. Se puede prescindir de este si nuestro codigo
   * no manipula nada que pueda generar memory leaks.
   */
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  /**
   * La recomendacion de React es que si queremos que el useEffect
   * este amarrado a varias dependencias, es mejor que se cree un
   * useEffect por cada dependencia, es decir, que cada useEffect
   * tenga a lo sumo 1 dependencia.
   *
   * Por ejemplo:
   */

  const { username, email } = formState;

  useEffect(() => {
    // console.log("useEffect Called");
  }, []);

  useEffect(() => {
    // console.log("formState changed!");
  }, [formState]);

  useEffect(() => {
    // console.log("email changed!");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@ejemplo.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "jhonnier" && <Message />}
    </>
  );
};
