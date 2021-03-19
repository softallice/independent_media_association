import { useState, useEffect } from 'react';

import { apiUrl } from '../../lib/constants';

const useGetRequest = (endpoint, filter) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let prevent = false;
    const fetchData = async () => {
        try {
          setLoading(true);
          let response = await fetch(`${apiUrl}/${endpoint}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            filter,
          });
          if (!prevent) setData(await response.json());
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
    };
    fetchData();
    return () => {
      prevent = true;
    };
  }, [endpoint]);
  return { data, loading, error };
};

export default useGetRequest;
