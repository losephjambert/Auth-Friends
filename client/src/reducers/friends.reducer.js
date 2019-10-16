import {
  FRIENDS_FETCH_START,
  FRIENDS_FETCH_SUCCESS,
  FRIENDS_FETCH_FAILURE
} from "../actions";

const initialState = {
  isFetching: false,
  error: null,
  friends: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FRIENDS_FETCH_START:
      console.log("fetching friends");
      return {
        ...initialState,
        isFetching: true
      };
    case FRIENDS_FETCH_SUCCESS:
      console.log("fetching friends success!");
      return {
        error: null,
        isFetching: false,
        friends: action.payload
      };
    case FRIENDS_FETCH_FAILURE:
      console.log("fetching friends failure");
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      console.log("FRIENDS reducer default", state);
      return state;
  }
};
