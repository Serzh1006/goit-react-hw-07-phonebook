import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { fetchContacts } from 'servises/fetchContactsApi';
import { addNewContactsToDB } from 'servises/addContactsApi';
import { deleteContactUser } from '../servises/deleteContactApi';
import { messageObj } from '../helpers/settings';

const contactsState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      })
      .addCase(addNewContactsToDB.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addNewContactsToDB.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.items.push(action.payload);
        toast.success('Контакт был успешно добавлен', messageObj);
      })
      .addCase(addNewContactsToDB.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      })
      .addCase(deleteContactUser.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(deleteContactUser.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        const indexElem = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(indexElem, 1);
        toast.success('Контакт был успешно удален', messageObj);
      })
      .addCase(deleteContactUser.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
        toast.error(`${action.payload}`, messageObj);
      });
  },
});

export const Reducer = phoneBookSlice.reducer;
