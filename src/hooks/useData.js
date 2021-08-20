import { useEffect, useState } from 'react';
import getPlanets from '../services/Api';

const useData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await getPlanets();
      setData(result);
    };
    fetchPlanets();
  }, []);
  return [data];
};

export default useData;
