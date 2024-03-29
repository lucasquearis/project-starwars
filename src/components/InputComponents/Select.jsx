import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ testid, value, id, onChange, array, title, name }) => (
  <label htmlFor={ testid }>
    { title }
    <select
      name={ name }
      data-testid={ testid }
      value={ value }
      id={ id }
      onChange={ onChange }
    >
      {array.map((item) => <option key={ item }>{ item }</option>)}
    </select>
  </label>
);

Select.propTypes = {
  testid: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  array: PropTypes.array,
  htmlFor: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default Select;
