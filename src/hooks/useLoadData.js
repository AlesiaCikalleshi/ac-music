import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export function useLoadData(fetchData) {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState();

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchData();
        setData(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return [data, isLoading];
}
