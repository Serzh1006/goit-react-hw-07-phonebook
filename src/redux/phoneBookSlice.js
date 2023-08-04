import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsState = {
  contacts: [],
};

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(nameUser, number) {
        return {
          payload: {
            id: nanoid(),
            nameUser,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const indexElem = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(indexElem, 1);
    },
  },
});

const persistConfig = {
  key: 'PhoneBook',
  storage,
  whitelist: ['contacts'],
};
export const persistedReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);

export const { addContact, deleteContact } = phoneBookSlice.actions;
