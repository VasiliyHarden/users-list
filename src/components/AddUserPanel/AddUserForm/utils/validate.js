const idRegexp = /^(0|[1-9]\d*)?$/;

export const validate = (field, oldValue, newValue) => {
  if (field === 'id' && !idRegexp.test(newValue)) {
    return oldValue;
  }
  return newValue;
}