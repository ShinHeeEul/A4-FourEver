import { useEffect, useState } from 'react';
import { MakePath } from '../../api';
import { ARCHIVING } from '../../constant';

const useFetch = ({ url, config, optionSelect, activeTab }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [controller, setController] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // setController(new AbortController());
      try {
        const response = await fetch(url, {
          ...config,
          // signal: controller.signal,
        });
        const jsonData = await response.json();

        if (config?.body) {
          const body = JSON.parse(config.body);
          const now = new Date();
          const expirationMinutes = 0.1;
          const expiration = now.getTime() + expirationMinutes * 60 * 1000;
          const entire = { ...body, activeTab };
          localStorage.setItem(
            JSON.stringify(entire),
            JSON.stringify({ data: jsonData, expiration }),
          );
        }
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    const entire = { ...optionSelect, activeTab };
    const localData = localStorage.getItem(JSON.stringify(entire));

    if (localData) {
      setData(JSON.parse(localData).data);

      const data = JSON.parse(localData);
      const now = new Date().getTime();
      if (now > data.expiration) {
        // controller?.abort();
        fetchData();
      }

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
