import { FILTER_TEXT } from './users.actions';

const users = [
  {
    id: 'id-0',
    age: 21,
    name: 'Bob',
  },
  {
    id: 'id-1',
    age: 17,
    name: 'Tom',
  },
  {
    id: 'id-2',
    age: 18,
    name: 'Tad',
  },
  {
    id: 'id-3',
    age: 45,
    name: 'Justin',
  },
  {
    id: 'id-4',
    age: 40,
    name: 'Franklin',
  },
  {
    id: 'id-5',
    age: 42,
    name: 'John',
  },
  {
    id: 'id-6',
    age: 12,
    name: 'Andrew',
  },
  {
    id: 'id-7',
    age: 63,
    name: 'Pol',
  },
  {
    id: 'id-8',
    age: 18,
    name: 'Ron',
  },
  {
    id: 'id-9',
    age: 45,
    name: 'Harry',
  },
  {
    id: 'id-10',
    age: 19,
    name: 'Anna',
  },
];

const initialState = {
  filterText: '',
  usersList: users,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TEXT:
      return {
        ...state,
        filterText: action.payload.findText,
      };

    default:
      return state;
  }
};

export default usersReducer;
