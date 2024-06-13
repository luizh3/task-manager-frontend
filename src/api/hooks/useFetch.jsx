import { useEffect, useState } from "react";

export function useFetch(options, dsUrl) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [dsError, setDsError] = useState("");

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchStatus() {
      setIsLoading(true);

      try {
        const response = await fetch(dsUrl, {
          ...options,
          signal: abortController.signal,
        });

        const data = await response.json();
        console.log(data);

        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.log(error.message);
          setDsError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchStatus();

    return function () {
      abortController.abort();
    };
  }, []);

  return { isLoading, data, dsError };
}
