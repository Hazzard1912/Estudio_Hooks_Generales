import { useFetch } from "../hooks/useFetch";
import { LoadingQuote, Quote } from "../03-examples";

export const Layout = () => {
  const url = "https://api.breakingbadquotes.xyz/v1/quotes";
  const { data, isLoading, hasError } = useFetch(url);
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
