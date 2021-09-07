import React, { useState, useContext, useEffect } from 'react';
import FilterContext from '../../context/FilterContext';
import Button from './Button';
import InputNameAndValue from './InputNameAndValue';
import RadioInput from './RadioInput';
import Select from './Select';
import './input.css';

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
    <div className="forms-container">
      <form className="row g-3">
        <div className="col-auto">
          <InputNameAndValue
            valueForm={ valuesForm.nameInput }
            title="Filter:"
            id="filterByName"
            name="name"
            testid="name-filter"
            onChange={ handleChangeName }
          />
        </div>
        <div className="col-auto">
          <Select
            title="Select Column:"
            testid="column-filter"
            value={ valuesForm.column }
            id="column-filter"
            onChange={ handleChange }
            array={ columnOptions }
          />
        </div>
        <div className="col-auto">
          <Select
            title="Comparison:"
            testid="comparison-filter"
            value={ valuesForm.comparison }
            id="comparison-filter"
            onChange={ handleChange }
            array={ comparisionOptions }
          />
        </div>
        <div className="col-auto">
          <InputNameAndValue
            valueForm={ valuesForm.value }
            type="number"
            title="Value:"
            id="value-filter"
            testid="value-filter"
            onChange={ handleChange }
          />
        </div>
        <div className="col-auto">
          <br />
          <Button
            testid="button-filter"
            onClick={ handleClick }
            title="Add Filter"
          />
        </div>
      </form>
      <form className="row g-3">
        <div className="col-auto">
          <Select
            testid="column-sort"
            onChange={ handleChangeSort }
            array={ defaultOptions }
            title="Sort by: "
            name="column"
          />
        </div>
        <div className="col-auto">
          <RadioInput
            id="ASC"
            title="ascending order"
            testid="column-sort-input-asc"
            onChange={ handleChangeSort }
          />
        </div>
        <div className="col-auto">
          <RadioInput
            id="DESC"
            title="descending order"
            testid="column-sort-input-desc"
            onChange={ handleChangeSort }
          />
        </div>
        <div className="col-auto">
          <br />
          <Button
            testid="column-sort-button"
            onClick={ handleSort }
            title="Sort"
          />
        </div>
      </form>
    </div>
  );
};

export default Input;
