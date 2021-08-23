import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';
import useData from '../hooks/useData';

const Provider = ({ children }) => {
  const [filterNameProvider, setFilterNameProvider] = useState('');
  const [planets, setPlanets] = useState([]);
  const [data] = useData();
  const context = {
    filters: {
      filterByName: {
        name: filterNameProvider,
      },
    },
    setFilterNameProvider,
    planets,
  };

  useEffect(() => {
    if (data.results) {
      const handleFilter = () => {
        let arrayFiltered = [...data.results];
        arrayFiltered = arrayFiltered.filter(({ name }) => name.toLowerCase()
          .includes(filterNameProvider.toLowerCase()));
        console.log(arrayFiltered);
        setPlanets(arrayFiltered);
      };
      handleFilter();
    }
  }, [data.results, filterNameProvider]);

  return (
    <FilterContext.Provider value={ context }>
      { children }
    </FilterContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
