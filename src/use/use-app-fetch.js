import { useCallback, useState } from "react";

export function useAppFetch(fetchAPI, params, initialValue) {
  const [response, setResponse] = useState(initialValue);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  const requestHandler = useCallback(() => {
    (async () => {
      try {
        setError(false);
        setLoading(true);
        const res = await fetchAPI(params);
        setResponse(res);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [fetchAPI, params]);

  return [response, loading, error, requestHandler];
}
