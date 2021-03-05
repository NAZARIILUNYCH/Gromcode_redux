import { LANGUAGE } from './language.actions';

const initialState = {
  language: 'en',
};

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE:
      return {
        state: action.payload.lang,
      };

    default:
      return state;
  }
};
