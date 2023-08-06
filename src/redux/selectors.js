import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;
export const selectFilter = state => state.filter.filter;
export const selectLoading = state => state.contacts.contacts.isLoading;
export const selectError = state => state.contacts.contacts.error;

export const visibleContacts = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    return items.filter(contact =>
      contact.nameUser.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
