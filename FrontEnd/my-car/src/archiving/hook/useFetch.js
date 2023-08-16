import { useEffect, useState } from 'react';
import { ARCHIVING } from '../../constant';

const useFetch = ({ url, config, optionSelect }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, { ...config });
        const jsonData = await response.json();
        if (config?.body) {
          localStorage.setItem(config.body, JSON.stringify(jsonData));
        }
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (optionSelect) {
      const localData = localStorage.getItem(JSON.stringify(optionSelect));
      if (localData) {
        setData(JSON.parse(localData));
      } else {
        setLoading(true);
        fetchData();
      }
    } else {
      setLoading(true);
      fetchData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionSelect]);

  return { data, loading, error };
};
export default useFetch;
