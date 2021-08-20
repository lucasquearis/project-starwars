import React, { useState, useContext, useEffect } from 'react';
import FilterContext from '../context/FilterContext';

const Input = () => {
  const [filters, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });

  const { setFilterNameProvider } = useContext(FilterContext);

  const { filters: { filterByName: { name: nameValue } } } = filters;

  const handleChange = ({ target: { id, value, name } }) => {
    setFilter({
      filters: {
        [id]: {
          [name]: value,
        },
      },
    });
  };

  useEffect(() => {
    setFilterNameProvider(filters);
  });

  return (
    <label htmlFor="filterByName">
      Filtro:
      <input
        value={ nameValue }
        id="filterByName"
        name="name"
        data-testid="name-filter"
        onChange={ handleChange }
      />
    </label>
  );
};

export default Input;
