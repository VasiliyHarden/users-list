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
    <>
      <button name={ datasetSizes.small } onClick={ dataRequestHandler }>
        Load small dataset
      </button>
      <button name={ datasetSizes.large } onClick={ dataRequestHandler }>
        Load large dataset
      </button>
    </>
  );
};

export default DataRequestPanel;