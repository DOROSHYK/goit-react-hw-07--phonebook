// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import phoneBookActions from "./contacts-actions";

const items = createReducer([], {
  [phoneBookActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [phoneBookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phoneBookActions.deleteContactSuccess]: (state, { payload }) => {
    return state.filter(({ id }) => id !== payload);
  },
});

const filter = createReducer("", {
  [phoneBookActions.changeFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  filter,
  error,
});
