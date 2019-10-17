import {
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE,
  FRIENDS_CREATE_START,
  FRIENDS_CREATE_SUCCESS,
  FRIENDS_CREATE_FAILURE,
  FRIENDS_EDITING,
  FRIENDS_UPDATE_START,
  FRIENDS_UPDATE_SUCCESS,
  FRIENDS_UPDATE_FAILURE,
} from '../actions';

const initialState = {
  isFetching: false,
  error: null,
  friends: [],
  updateFriend: {
    id: null,
    isUpdating: false,
    error: null,
  },
  createFriend: {
    isCreating: false,
    error: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case FRIENDS_FETCH_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        friends: action.payload,
      };
    case FRIENDS_FETCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
    case FRIENDS_CREATE_START:
      return {
        ...state,
        createFriend: {
          isCreating: true,
          error: null,
        },
      };
    case FRIENDS_CREATE_SUCCESS:
      return {
        ...state,
        friends: action.payload,
        createFriend: {
          isCreating: false,
          error: null,
        },
      };
    case FRIENDS_CREATE_FAILURE:
      return {
        ...state,
        createFriend: {
          isCreating: false,
          error: action.payload,
        },
      };
    case FRIENDS_EDITING:
      console.log(FRIENDS_EDITING);
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          editing: action.payload.editing,
          id: action.payload.id,
        },
      };
    case FRIENDS_UPDATE_START:
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: true,
        },
      };
    case FRIENDS_UPDATE_SUCCESS:
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
    case FRIENDS_UPDATE_FAILURE:
      return {
        ...state,
        updateFriend: {
          ...state.updateFriend,
          isUpdating: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
