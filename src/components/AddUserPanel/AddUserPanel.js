import React, { useState, useCallback } from 'react';

import FormField from './FormField/FormField';
import { tableCols } from '../../constants/table-cols';

import './AddUserPanel.scss';

const AddUserPanel = () => {
  
  const [form, setForm] = useState(Object.fromEntries(tableCols.map(col => [col, ''])));

  const changeHandler = useCallback((e) => {
    console.log('haha', e.target.name)
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }, [form, setForm]);

  const addUserHandler = (e) => {
    console.log('User has been added');
  };

  return (
    <form className='add-user-panel' onSubmit={ addUserHandler }>
      {
        tableCols.map(col => (
          <FormField 
            key={ col } 
            name={ col }
            value={ form[col] }
            changeHandler={ changeHandler }
          />
        ))
      }  
      <button>Add user</button>    
    </form>
  );
};

export default AddUserPanel;