import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) => {
    const filteredContacts = (contacts) => {
      const normalizedContacts = filter.toLowerCase();
      return contacts.filter((text) =>
        text.name.toLowerCase().includes(normalizedContacts)
      );
    };
    return filteredContacts(items);
  }
);

// export const getIsAdded = createSelector([getContacts], (contacts) => {
//   const isAdded = (name) =>
//     contacts.map((contact) => contact.name).includes(name);
//   return isAdded;
// });
