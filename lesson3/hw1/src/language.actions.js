export const LANGUAGE = 'SETLANGUAGE/LANGUAGE';

export const setLanguage = lang => ({
  type: LANGUAGE,
  payload: {
    lang,
  },
});
