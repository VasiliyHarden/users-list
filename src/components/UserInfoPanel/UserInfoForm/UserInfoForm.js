import React, { useLayoutEffect, useRef } from 'react';

import './UserInfoForm.scss';

const UserInfoForm = ({ 
  firstName, 
  lastName, 
  description, 
  address: { streetAddress, city, state, zip }
}) => {

  const textareaRef = useRef();
  useLayoutEffect(() => {
    textareaRef.current.value = description;
  }, [description]);

  return (
    <div className='user-info-form'>
      <p>Выбран пользователь <b>{ `${firstName} ${lastName}` }</b></p>
      <p>Описание:</p>
      <textarea className='user-info-form__textarea' ref={ textareaRef } />
      <p>Адрес проживания: <b>{ streetAddress }</b></p>
      <p>Город: <b>{ city }</b></p>
      <p>Провинция/штат: <b>{ state }</b></p>
      <p>Индекс: <b>{ zip }</b></p>
    </div>
  );
};

export default UserInfoForm;