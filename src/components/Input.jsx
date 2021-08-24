import React, { useState, useContext, useEffect } from 'react';
import FilterContext from '../context/FilterContext';

const Input = () => {
  const comparisionOptions = ['maior que', 'menor que', 'igual a'];
  const [nameInput, setNameInput] = useState('');
  const [valuesForm, setValueForms] = useState(
    { column: 'population', comparison: 'maior que', value: '100000' },
  );
  const {
    setFilterNameProvider,
    setValuesFormProvider,
    valuesFormProvider,
    columnOptions,
  } = useContext(FilterContext);

  const handleChangeName = ({ target: { value } }) => {
    setNameInput(value);
  };

  const handleChange = ({ target: { value, id } }) => {
    switch (id) {
    case 'column-filter':
      setValueForms(
        { ...valuesForm, column: value },
      );
      break;
    case 'comparison-filter':
      setValueForms(
        { ...valuesForm, comparison: value },
      );
      break;
    case 'value-filter':
      setValueForms(
        { ...valuesForm, value },
      );
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    setFilterNameProvider(nameInput);
  });

  const handleClick = () => {
    setValuesFormProvider([...valuesFormProvider, valuesForm]);
  };

  return (
    <>
      <label htmlFor="filterByName">
        Filter:
        <input
          value={ valuesForm.nameInput }
          id="filterByName"
          name="name"
          data-testid="name-filter"
          onChange={ handleChangeName }
        />
      </label>
      <label htmlFor="column-filter">
        Select Column:
        <select
          data-testid="column-filter"
          value={ valuesForm.column }
          id="column-filter"
          onChange={ handleChange }
        >
          {columnOptions.map((item) => <option key={ item }>{ item }</option>)}
        </select>
      </label>
      <label htmlFor="column-filter">
        Comparison:
        <select
          data-testid="comparison-filter"
          value={ valuesForm.comparison }
          onChange={ handleChange }
          id="comparison-filter"
        >
          {comparisionOptions.map((item) => <option key={ item }>{ item }</option>)}
        </select>
      </label>
      <label htmlFor="value-filter">
        Value:
        <input
          type="number"
          data-testid="value-filter"
          value={ valuesForm.value }
          id="value-filter"
          onChange={ handleChange }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Add Filter
      </button>
    </>
  );
};

export default Input;
