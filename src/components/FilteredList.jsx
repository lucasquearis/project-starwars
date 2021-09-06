import React, { useContext } from 'react';
import FilterContext from '../context/FilterContext';

const FilteredList = () => {
  const {
    arrayFiltersSelected,
    valuesFormProvider,
    setValuesFormProvider,
  } = useContext(FilterContext);

  console.log(arrayFiltersSelected, 'ARRAY FILTROS');
  console.log(valuesFormProvider);

  const handleClick = (option) => {
    const removeFilter = valuesFormProvider.filter((fil) => fil.column !== option);
    setValuesFormProvider(removeFilter);
  };

  return (
    <>
      <h3>Filtred Options: </h3>
      <ul>
        { arrayFiltersSelected.map((option) => (
          <li key={ option } data-testid="filter">
            <button
              onClick={ () => handleClick(option) }
              type="button"
            >
              x
            </button>
            { option }
          </li>
        )) }
      </ul>
    </>
  );
};

export default FilteredList;
