// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import {
//   // persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import rootReducer from "./contacts/contacts-reduser";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   blacklist: ["filter", "_persist"],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, rootReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// // const persistor = persistStore(store);

// const allElements = { store }; //+ persistor

// export default allElements;

import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducer from "./contacts/contacts-reduser";

// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

const store = configureStore({
  reducer: {
    contacts: phoneBookReducer,
  },

  devTools: process.env.NODE_ENV === "development",
});

export default store;
