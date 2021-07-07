import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import user from "./user.reducer";
import friends from "./friends.reducer";

const rootReducer = combineReducers({ user, friends });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
