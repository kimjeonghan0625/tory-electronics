import { useState, useEffect } from "react";

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

function useDataFetching<T>(path: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(path);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: T = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function to cancel fetch on unmounting or re-fetching
    return () => {
      // You can cancel ongoing fetch operations if needed
    };
  }, [path]);

  return { data, loading, error };
}

export default useDataFetching;
