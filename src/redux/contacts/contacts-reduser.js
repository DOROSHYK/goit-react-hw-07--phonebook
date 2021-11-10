import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phoneBookActions from "./contacts-actions";

const items = createReducer([], {
  [phoneBookActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [phoneBookActions.addContactSuccess]: (state, { payload }) => [
    ...state,
    payload,
  ],
  [phoneBookActions.deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ name }) => name !== payload),
});

const filter = createReducer("", {
  [phoneBookActions.changeFilter]: (_, { payload }) => payload,
});

// const error = createReducer(null, {});

export default combineReducers({
  contacts: items,
  filter,
  // error
});
