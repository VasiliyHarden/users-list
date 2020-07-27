import React from 'react';
import { useSelector } from 'react-redux';

import { getSpinnerMessage } from '../../store/spinner/selectors';

import './Spinner.scss';

const Spinner = () => {

  const message = useSelector(getSpinnerMessage);

  if (!message) {
    return null;
  }

  return (
    <div className='spinner'>
      <div className='spinner__overlay' />
      <div className='spinner__message'>{ message }</div>
    </div>
  );
}

export default Spinner;