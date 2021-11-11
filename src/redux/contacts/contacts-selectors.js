import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.items;
export const getFilter = (state) => state.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const filteredContacts = (contacts) => {
      const normalizedContacts = filter.toLowerCase();
      return contacts.filter((text) =>
        text.name.toLowerCase().includes(normalizedContacts)
      );
    };
    return filteredContacts(contacts);
  }
);

// export const getVisibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, filter) =>

//       // const normalizedContacts = filter.toLowerCase();
//       contacts.filter(text =>
//         text.name.toLowerCase().includes(filter.toLowerCase())
//       ),

// );
