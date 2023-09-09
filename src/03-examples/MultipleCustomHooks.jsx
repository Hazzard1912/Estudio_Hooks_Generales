import { useFetch } from "../hooks/useFetch";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {
  const url = "https://api.breakingbadquotes.xyz/v1/quotes";

  const { data, isLoading, hasError } = useFetch(url);

  /**
   * Si la data tiene un valor, entonces toma lo que hay en la
   * posicion 0. (tener en cuenta que viene de la llamada a la
   * api, y que retorna un arreglo).
   */
  const { author, quote } = !!data && data[0];

  return (
    <>
      <div>BreakingBad Quotes</div>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}

      <button
        className="btn btn-primary"
        onClick={() => window.location.reload()}
      >
        Next Quote
      </button>
    </>
  );
};
