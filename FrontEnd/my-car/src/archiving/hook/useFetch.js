import { useEffect, useState } from 'react';

const useFetch = ({ url, config, optionSelect, activeTab }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const fetchData = async () => {
    // console.log(url);
    try {
      const response = await fetch(url, { ...config });
      const jsonData = await response.json();

      if (config?.body) {
        const body = JSON.parse(config.body);
        const entire = { ...body, activeTab };
        console.log(entire);
        localStorage.setItem(JSON.stringify(entire), JSON.stringify(jsonData));
      }
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const entire = { ...optionSelect, activeTab };
    const localData = localStorage.getItem(JSON.stringify(entire));
    if (localData) {
      setData(JSON.parse(localData));
      setLoading(false);
    } else {
      setLoading(true);
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionSelect, activeTab]);

  return { data, loading, error };
};
export default useFetch;
