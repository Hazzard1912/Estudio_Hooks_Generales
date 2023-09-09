import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {
  /**
   * Al habernos creado este hook personalizado, podemos crear
   * los formularios como queramos desde aqui, es decir, le
   * podemos pasar a nuestro useForm un objeto con la cantidad
   * de propiedades que enlazamos a nuestros input, y
   * el onInputChange se encargara de usar el useState para
   * actualizar cada una.
   */
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });

  // const { username, email, password } = formState;

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

      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
      />

      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>

      {/* {username === "jhonnier" && <Message />} */}
    </>
  );
};
