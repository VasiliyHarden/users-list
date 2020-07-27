import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { applyFilter } from '../../store/users';

import './FilterPanel.scss';

const FilterPanel = () => {

  const [text, setText] = useState(''); 

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const dispatch = useDispatch();
  const setFilterHandler = (e) => {
    e.preventDefault();
    dispatch(applyFilter(text.trim().toLowerCase()));
  }

  return (
    <form onSubmit={ setFilterHandler }>
      <input type='text' value={ text } onChange={ changeHandler } />
      <button>Найти</button>
    </form>
  );
};

export default FilterPanel;