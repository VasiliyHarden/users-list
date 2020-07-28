import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FormField from '../FormField/FormField';
import { tableCols } from '../../../constants/table-cols';
import { addUser } from '../../../store/users';

import './AddUserForm.scss';

const AddUserForm = ({ closeForm }) => {
  
  const [form, setForm] = useState(Object.fromEntries(tableCols.map(col => [col, ''])));
  const [isReady, setIsReady] = useState(false);

  const changeHandler = useCallback((e) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
    setIsReady(Object.values(newForm).every(value => !!value));
  }, [form, setForm, setIsReady]);

  const dispatch = useDispatch();
  const addUserHandler = (e) => {
    e.preventDefault();
    dispatch(addUser(form));
    closeForm();
  };

  return (
    <form className='add-user-form' onSubmit={ addUserHandler }>
      <div className='add-user-form__input-group'>
        {
          tableCols.map(col => (
            <FormField 
              key={ col } 
              name={ col }
              value={ form[col] }
              changeHandler={ changeHandler }
              className={`add-user-form__field add-user-form__field--${col}`}
            />
          ))
        }
      </div>
      <div className='add-user-form__button-group'>
        <button disabled={ !isReady }>Добавить в таблицу</button>    
      </div>
    </form>
  );
};

export default AddUserForm;