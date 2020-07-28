import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import UsersListItem from '../UsersListItem/UsersListItem';
import PagePicker from '../PagePicker/PagePicker';
import { getUsersKeys, getSortOptions, applySorting } from '../../store/users';
import { tableCols } from '../../constants/table-cols';

import './UsersList.scss';

const UsersList = () => {

  const usersKeys = useSelector(getUsersKeys, shallowEqual);
  const { column, isAsc } = useSelector(getSortOptions);

  const dispatch = useDispatch();
  const applySortHandler = (e) => {
    dispatch(applySorting(e.currentTarget.dataset.columnName));
  };
  
  return (
    <div className='user-list'>
      <PagePicker />
      <table className='user-list__table'>
        <colgroup>
          { tableCols.map(col => <col key={ col } className={`user-list__col--${col}`} />) }
        </colgroup>   
        <thead>
          <tr>
            { 
              tableCols.map(col => (
                <th 
                  className='user-list__th' 
                  key={ col } 
                  data-column-name={ col } 
                  onClick={ applySortHandler }
                >
                  { col }
                  { column === col && <span>{ isAsc ? '🔺' : '🔻' }</span> }
                </th>
              )) 
            }
          </tr>
        </thead>
        <tbody>
          {
            usersKeys.map(key => <UsersListItem key={ key } userKey={ key } />)
          }
        </tbody>
      </table>
      <PagePicker />
    </div>
  );
};

export default UsersList;