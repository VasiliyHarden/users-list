import { tableCols } from '../../../constants/table-cols';

export const filterFactory = (filterText, users) => key => {
  const user = users[key];
  for (const col of tableCols) {
    if (String(user[col]).toLowerCase().includes(filterText)) {
      return true;
    }
  }
  return false;
};