import {
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE,
  FRIENDS_CREATE_START,
  FRIENDS_CREATE_SUCCESS,
  FRIENDS_CREATE_FAILURE,
  FRIENDS_EDITING_START,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  friends: [],
  updateFriend: {
    editing: false,
    id: null,
    isUpdating: false,
  },
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
        ...state,
        isFetching: true,
      };
    case FRIENDS_FETCH_SUCCESS:
      console.log('fetching friends success!');
      return {
        ...state,
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
        friends: action.payload,
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
    case FRIENDS_EDITING_START:
      console.log(FRIENDS_EDITING_START);
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          editing: true,
          id: action.payload,
        },
      };
    case FRIENDS_UPDATE_START:
      console.log(FRIENDS_UPDATE_START);
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: true,
        },
      };
    case FRIENDS_UPDATE_SUCCESS:
      console.log(FRIENDS_UPDATE_SUCCESS);
      return {
        ...state,
        friends: action.payload,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: false,
          editing: false,
          id: null,
        },
      };
    default:
      console.log('FRIENDS reducer default', state);
      return state;
  }
};
