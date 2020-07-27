import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTotalPages, getCurrentPage } from '../../store/users/selectors';
import { navigateToPage } from '../../store/users/actions';

import './PagePicker.scss';

const PagePicker = () => {

  const totalPages = useSelector(getTotalPages);
  const currentPage = useSelector(getCurrentPage);

  const dispatch = useDispatch();
  const pageSelectHandler = (e) => {
    const pagenum = e.target.dataset.pagenum;
    dispatch(navigateToPage(pagenum));
  };

  const pagesButtons = Array.from({ length: totalPages }, (_, k) => (
    <button 
      key={ k + 1 } 
      onClick={ pageSelectHandler } 
      data-pagenum={ k + 1 }
    >
      { k + 1 }
    </button>
  ));

  return (
    <div>
      { pagesButtons }
    </div>
  );
};

export default PagePicker;