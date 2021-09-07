import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterContext from './FilterContext';
import useData from '../hooks/useData';

const Provider = ({ children }) => {
  const [filterNameProvider, setFilterNameProvider] = useState('');
  const [valuesFormProvider, setValuesFormProvider] = useState([]);
  const [columnOptions, setColumnOptions] = useState(['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water']);
  const [planets, setPlanets] = useState([]);
  const [data] = useData();
  const [arrayFiltersSelected, setArrayFiltersSelected] = useState([]);
  const [orderedPlanets, setOrderedPlanets] = useState([]);

  useEffect(() => {
    if (data) {
      let arrayFiltered = [...data];
      arrayFiltered = arrayFiltered.filter(({ name }) => name.toLowerCase()
        .includes(filterNameProvider.toLowerCase()));
      setPlanets(arrayFiltered);
    }
  }, [data, filterNameProvider]);

  useEffect(() => {
    const orderPlanets = () => {
      setPlanets(orderedPlanets);
    };
    orderPlanets();
  }, [orderedPlanets]);

  useEffect(() => {
    const filterArrayPlanets = () => {
      if (data && valuesFormProvider) {
        let arrayFiltered = [...data];
        valuesFormProvider.forEach(({ column, comparison, value }) => {
          switch (comparison) {
          case 'maior que':
            arrayFiltered = arrayFiltered.filter((planet) => (
              +planet[column] > +value
            ));
            break;
          case 'menor que':
            arrayFiltered = arrayFiltered.filter((planet) => (
              +planet[column] < +value
            ));
            break;
          case 'igual a':
            arrayFiltered = arrayFiltered.filter((planet) => (
              +planet[column] === +value
            ));
            break;
          default:
            break;
          }
        });
        setPlanets(arrayFiltered);
      }
    };
    filterArrayPlanets();
  }, [data, valuesFormProvider]);

  useEffect(() => {
    const options = ['population', 'orbital_period',
      'diameter', 'rotation_period', 'surface_water'];
    const arrayOptions = valuesFormProvider.map(({ column }) => column);
    const filtredArrayOptions = options
      .filter((option) => !arrayOptions.includes(option));
    setColumnOptions(filtredArrayOptions);
    setArrayFiltersSelected(arrayOptions);
  }, [valuesFormProvider]);

  const context = {
    setFilterNameProvider,
    setValuesFormProvider,
    setOrderedPlanets,
    valuesFormProvider,
    planets,
    columnOptions,
    arrayFiltersSelected,
    filters: {
      filterByName: {
        name: filterNameProvider,
      },
      filterByNumericValues: valuesFormProvider,
      order: {
        column: 'Name',
        short: 'ASC',
      },
    },
  };

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
