import React, { useState, useContext, useEffect } from 'react';
import FilterContext from '../context/FilterContext';
import InputNameAndValue from './InputNameAndValue';
import Select from './Select';

const Input = () => {
  const comparisionOptions = ['maior que', 'menor que', 'igual a'];
  const [nameInput, setNameInput] = useState('');
  const [valuesForm, setValueForms] = useState(
    { column: 'population', comparison: 'maior que', value: '100000' },
  );
  const [sortOrder, setSortOrder] = useState({
    column: '',
    sort: '',
  });
  const {
    setFilterNameProvider,
    setValuesFormProvider,
    valuesFormProvider,
    columnOptions,
    planets,
    setOrderedPlanets,
  } = useContext(FilterContext);
  const defaultOptions = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

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
  }, [nameInput, setFilterNameProvider]);

  const handleClick = () => {
    setValuesFormProvider([...valuesFormProvider, valuesForm]);
  };

  const handleSort = () => {
    const { sort, column } = sortOrder;
    if (sort && column) {
      const sortedPlanets = [...planets];
      sortedPlanets.sort((a, b) => {
        if (sort === 'ASC') return a[column] - b[column];
        if (sort === 'DESC') return b[column] - a[column];
        return false;
      });
      setOrderedPlanets(sortedPlanets);
    }
  };

  const handleChangeSort = ({
    target: { name, value } }) => (name === 'column' ? setSortOrder(
    {
      ...sortOrder,
      column: value,
    },
  ) : setSortOrder(
    {
      ...sortOrder,
      sort: value,
    },
  ));

  return (
    <>
      <form>
        <InputNameAndValue
          valueForm={ valuesForm.nameInput }
          title="Filter:"
          id="filterByName"
          name="name"
          testid="name-filter"
          onChange={ handleChangeName }
        />
        <Select
          title="Select Column:"
          htmlFor="column-filter"
          testid="column-filter"
          value={ valuesForm.column }
          id="column-filter"
          onChange={ handleChange }
          array={ columnOptions }
        />
        <Select
          title="Comparison:"
          htmlFor="column-filter"
          testid="comparison-filter"
          value={ valuesForm.comparison }
          id="comparison-filter"
          onChange={ handleChange }
          array={ comparisionOptions }
        />
        <InputNameAndValue
          valueForm={ valuesForm.value }
          type="number"
          title="Value:"
          id="value-filter"
          testid="value-filter"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Add Filter
        </button>
      </form>
      <form>
        <select
          onChange={ handleChangeSort }
          data-testid="column-sort"
          name="column"
        >
          {defaultOptions.map((item) => (
            <option
              key={ item }
            >
              {item}
            </option>
          ))}
        </select>
        <label htmlFor="ASC">
          Ascending Order
          <input
            name="sort"
            id="ASC"
            data-testid="column-sort-input-asc"
            type="radio"
            value="ASC"
            onChange={ handleChangeSort }
          />
        </label>
        <label htmlFor="DESC">
          Descending Order
          <input
            name="sort"
            id="DESC"
            data-testid="column-sort-input-desc"
            type="radio"
            value="DESC"
            onChange={ handleChangeSort }
          />
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ handleSort }
        >
          Sort
        </button>
      </form>
    </>
  );
};

export default Input;
