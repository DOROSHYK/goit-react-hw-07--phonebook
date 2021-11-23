import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./contacts/contacts-reduser";

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },

  devTools: process.env.NODE_ENV === "development",
});

export default store;
