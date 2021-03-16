export const FILTER_TEXT = 'USERS/FILTER_TEXT';

export const filterText = findText => {
  return {
    type: FILTER_TEXT,
    payload: {
      findText,
    },
  };
};
