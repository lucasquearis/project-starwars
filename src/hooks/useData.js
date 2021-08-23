import { useEffect, useState } from 'react';
import getPlanets from '../services/Api';

const useData = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await getPlanets();
      setData(result);
      console.log('api chamou');
    };
    fetchPlanets();
  }, []);
  return [data];
};

export default useData;
