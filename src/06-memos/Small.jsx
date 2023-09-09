// import { memo } from "react";
import React from "react";

/**
 * Le decimos a react que memorice este componente, y que se vuelva
 * a renderizar solamente cuando sus properties cambien.
 *
 * con CRA se puede usar React.memo directamente. Este proyecto
 * con vite necesita de importar React en este scope o componente
 */

export const Small = React.memo(({ counter }) => {
  console.log("Me volvi a generar");

  return <small>{counter}</small>;
});

Small.displayName = "Small";
