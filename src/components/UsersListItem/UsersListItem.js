import React from 'react';

import './UsersListItem.scss';

const UsersListItem = ({ id, firstName, lastName, email, phone }) => {
  
  return (
    <tr>
      <td>{ id }</td>
      <td>{ firstName }</td>
      <td>{ lastName }</td>
      <td>{ email }</td>
      <td>{ phone }</td>
    </tr>
  );
};

export default UsersListItem;