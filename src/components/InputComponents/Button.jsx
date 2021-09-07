import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ testid, onClick, title }) => (
  <button
    type="button"
    data-testid={ testid }
    onClick={ onClick }
  >
    { title }
  </button>
);

Button.propTypes = {
  testid: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}.isRequired;

export default Button;
