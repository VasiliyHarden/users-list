export const sortFactory = (sortOptions, users) => {

  const { column, isAsc } = sortOptions;

  const compareStringFields = (lKey, rKey) => {
    const lUser = users[lKey];
    const rUser = users[rKey];
    return lUser[column].localeCompare(rUser[column]) * (isAsc ? 1 : -1);
  };

  const compareNumberFields = (lKey, rKey) => {
    const lUser = users[lKey];
    const rUser = users[rKey];
    return (lUser[column] - rUser[column]) * (isAsc ? 1 : -1);
  };

  return column === 'id' ? compareNumberFields : compareStringFields;
};