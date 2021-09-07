import React from 'react';
import PropTypes from 'prop-types';

const RadioInput = ({ id, title, testid, onChange }) => (
  <label htmlFor={ id }>
    { title }
    <input
      name="sort"
      id={ id }
      data-testid={ testid }
      type="radio"
      value={ id }
      onChange={ onChange }
    />
  </label>
);

RadioInput.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  testid: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default RadioInput;
