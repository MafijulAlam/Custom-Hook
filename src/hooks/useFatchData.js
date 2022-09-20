import React, { useEffect, useState } from 'react';

const useFatchData = (url, cb) => {
  const [data, setData] = useState(null);
  const [loding, setLoding] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoding(true);
    try {
      const res = await fetch(url);
      const result = await res.json();
      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
      setError('');
      setLoding(false);
    } catch (e) {
      setError(e.message);
      setLoding(false);
    }
  };

  return {
    data,
    error,
    loding,
  };
};

export default useFatchData;
