import { useEffect, useState } from 'react';

const useFetch = ({ url, config, optionSelect, activeTab }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [controller, setController] = useState();
  let flag = 0;

  useEffect(() => {
    const fetchData = async () => {
      // setController(new AbortController());
      try {
        const response = await fetch(url, {
          ...config,
          // signal: controller.signal,
        });
        const jsonData = await response.json();
        if (jsonData.code === 404) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          flag = 1;
          setData({ carReviewOverviewDTOs: [] });
          setLoading(false);
          return;
        }
        if (config?.body && optionSelect.extraOptionIds.length > 0) {
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

    if (flag) return;

    //로컬 캐시 데이터 관련
    const entire = { ...optionSelect, activeTab };
    const localData = localStorage.getItem(JSON.stringify(entire));

    if (localData) {
      setData(JSON.parse(localData).data);
      const data = JSON.parse(localData);
      const now = new Date().getTime();
      if (now > data.expiration) {
        // controller?.abort();
        const res = fetchData();
      }
      setLoading(false);
    } else {
      setLoading(true);
      if (optionSelect?.extraOptionIds.length > 0) {
        fetchData();
      }
      setLoading(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [optionSelect, activeTab]);

  return { data, loading, error };
};
export default useFetch;
