import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';
import useData from '../hooks/useData';

const Provider = ({ children }) => {
  const [filterNameProvider, setFilterNameProvider] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [data] = useData();
  const context = {
    filterNameProvider,
    setFilterNameProvider,
    planets,
  };

  useEffect(() => {
    const handleFilter = () => {
      const { filters } = filterNameProvider;
      if (data.results) {
        const { filterByName: { name: nameValue } } = filters;
        let arrayFiltered = [...data.results];
        arrayFiltered = arrayFiltered.filter(({ name }) => name.toLowerCase()
          .includes(nameValue.toLowerCase()));
        setPlanets(arrayFiltered);
      }
    };
    handleFilter();
  }, [data, filterNameProvider]);

  // console.log(data.results);
  // console.log(filterNameProvider);

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
