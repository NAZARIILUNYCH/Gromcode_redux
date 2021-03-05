import { LANGUAGE } from './language.actions';

export const languageReducer = (state = 'en', action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        state: action.payload.lang,
      };

    default:
      return state;
  }
};
