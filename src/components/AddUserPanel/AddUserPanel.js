import React, { useState, useCallback } from 'react';

import AddUserForm from './AddUserForm/AddUserForm';

import './AddUserPanel.scss';

const AddUserPanel = () => {

  const [isOpen, setIsOpen] = useState(false);

  const changeFormVisibilityHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen]);

  return (
    <>
      <div className='add-user-panel__btn-wrapper'>
        <button className='add-user-panel__btn' onClick={ changeFormVisibilityHandler }>
          { isOpen ? 'Скрыть форму' : 'Добавить пользователя' }
        </button>
      </div>
      { isOpen && <AddUserForm closeForm={ changeFormVisibilityHandler } /> }
    </>
  );
}

export default AddUserPanel;