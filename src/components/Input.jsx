import React, { useState, useContext, useEffect } from 'react';
import FilterContext from '../context/FilterContext';

const Input = () => {
  const columnOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];
  const comparisionOptions = ['maior que', 'menor que', 'igual a'];
  const [nameInput, setNameInput] = useState('');
  const { setFilterNameProvider } = useContext(FilterContext);

  const handleChange = ({ target: { value } }) => {
    setNameInput(value);
  };
  useEffect(() => {
    setFilterNameProvider(nameInput);
  });

  return (
    <>
      <label htmlFor="filterByName">
        Filter:
        <input
          value={ nameInput }
          id="filterByName"
          name="name"
          data-testid="name-filter"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="column-filter">
        Select Column:
        <select data-testid="column-filter">
          {columnOptions.map((item) => <option key={ item }>{ item }</option>)}
        </select>
      </label>
      <label htmlFor="column-filter">
        Comparison:
        <select data-testid="comparison-filter">
          {comparisionOptions.map((item) => <option key={ item }>{ item }</option>)}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input type="number" data-testid="value-filter" />
      </label>
      <button type="button" data-testid="button-filter">Add Filter</button>
    </>
  );
};

export default Input;
