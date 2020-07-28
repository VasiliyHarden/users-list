import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { applyFilter, getFilter, clearFilter } from '../../store/users';

import './FilterPanel.scss';

const FilterPanel = () => {

  const [text, setText] = useState(''); 
  const filter = useSelector(getFilter);

  const changeHandler = (e) => {
    setText(e.target.value);
  }

  const dispatch = useDispatch();
  const setFilterHandler = (e) => {
    e.preventDefault();
    dispatch(applyFilter(text.trim().toLowerCase()));
  };

  const clearFilterHandler = () => {
    dispatch(clearFilter());
  };

  return (
    <div className='filter-panel'>
      <form onSubmit={ setFilterHandler } className='filter-panel__form'>
        <input type='text' value={ text } onChange={ changeHandler } />
        <button className='filter-panel__btn'>Найти</button>
      </form>
      {
        filter && (
          <>
            <p className='filter-panel__info'>
              Текущий поиск: <span className='filter-panel__highlight'>{ filter }</span>
            </p> 
            <button 
              onClick={ clearFilterHandler } 
              className='filter-panel__btn'
            >
              Сбросить
            </button>
          </>
        )
      }
    </div>
    
  );
};

export default FilterPanel;