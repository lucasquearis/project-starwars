import { useEffect, useState } from 'react';
import getPlanets from '../services/Api';

const useData = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await getPlanets();
      const resultSort = [...result]
        .sort(({ name: a }, { name: b }) => a.localeCompare(b));
      setData(resultSort);
      console.log('api chamou');
    };
    fetchPlanets();
  }, []);
  return [data];
};

export default useData;
