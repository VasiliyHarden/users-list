import React from 'react';
import { useDispatch } from 'react-redux';

import { datasetSizes } from '../../constants/dataset-sizes';
import { loadUsers } from '../../store/users';

import './DataRequestPanel.scss';

const DataRequestPanel = () => {
  
  const dispatch = useDispatch();
  const dataRequestHandler = (e) => {
    const datasetSize = e.target.name;
    dispatch(loadUsers(datasetSize));
  };

  return (
    <div className='request-panel'>
      <button 
        className='request-panel__btn' 
        name={ datasetSizes.small } 
        onClick={ dataRequestHandler }
      >
        Загрузить маленький датасет
      </button>
      <button 
        className='request-panel__btn'
        name={ datasetSizes.large } 
        onClick={ dataRequestHandler }
      >
        Загрузить большой датасет
      </button>
    </div>
  );
};

export default DataRequestPanel;