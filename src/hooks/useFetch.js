import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController(),
      signal = abortController.signal;

    const fetchData = async (url) => {
      setLoading(true);

      try {
        let res = await fetch(url);

        if (!res.ok) {
          let err = new Error("Error en la petición");
          err.status = res.status || "00";
          err.statusText = res.statusText || "Ocurrió un error";
          throw err;
        }

        const json = await res.json();

        if (!signal.abort) {
          setData(json);
          setError(null);
        }
        setLoading(false);
      } catch (err) {
        if (!signal.abort) {
          setData(null);
          setError(err);
        }
      } finally {
        if (!signal.abort) {
          setLoading(false);
        }
      }
    };

    fetchData(url);
  }, [url]);

  return { data, loading, error };
};
