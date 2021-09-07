import React from 'react';
import PropTypes from 'prop-types';

const InputNameAndValue = ({
  valueForm,
  type,
  title,
  id,
  name,
  testid,
  onChange,
}) => (
  <label htmlFor="filterByName">
    { title }
    <input
      className="form-control"
      type={ type }
      value={ valueForm }
      id={ id }
      name={ name }
      data-testid={ testid }
      onChange={ onChange }
    />
  </label>
);

InputNameAndValue.propTypes = {
  setNameInput: PropTypes.func,
  valueForm: PropTypes.string,
  title: PropTypes.string,
}.isRequired;

export default InputNameAndValue;
