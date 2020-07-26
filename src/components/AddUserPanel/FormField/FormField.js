import React from 'react';

import './FormField.scss';

const FormField = ({ name, value, changeHandler, className = '' }) => (
  <label className={ `form-field__label ${ className }` }>
    { name }
    <input 
      type='text' 
      name={ name } 
      value={ value }
      className='form-field__input' 
      onChange={ changeHandler } 
    />
  </label>
);

export default FormField;