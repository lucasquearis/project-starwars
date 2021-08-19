import { useEffect, useState } from 'react';
import getPlanets from '../services/Api';

function Data() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchPlanets = async () => {
      const result = await getPlanets();
      setData(result);
    };
    fetchPlanets();
  }, []);
  return [data, setData];
}

export default Data;
