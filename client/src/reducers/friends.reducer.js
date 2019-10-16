import {
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE,
  FRIENDS_CREATE_START,
  FRIENDS_CREATE_SUCCESS,
  FRIENDS_CREATE_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  friends: [],
  createFriend: {
    isCreating: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCH_START:
      console.log('fetching friends');
      return {
        ...initialState,
        isFetching: true,
      };
    case FRIENDS_FETCH_SUCCESS:
      console.log('fetching friends success!');
      return {
        error: null,
        isFetching: false,
        friends: action.payload,
      };
    case FRIENDS_FETCH_FAILURE:
      console.log('fetching friends failure');
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case FRIENDS_CREATE_START:
      console.log('creating friends');
      return {
        ...state,
        createFriend: {
          isCreating: true,
          error: null,
        },
      };
    case FRIENDS_CREATE_SUCCESS:
      console.log('creating friends success!');
      return {
        ...state,
        friends: [action.payload],
        createFriend: {
          isCreating: false,
          error: null,
        },
      };
    case FRIENDS_CREATE_FAILURE:
      console.log('creating friends failure');
      return {
        ...state,
        createFriend: {
          isCreating: false,
          error: action.payload,
        },
      };
    default:
      console.log('FRIENDS reducer default', state);
      return state;
  }
};
