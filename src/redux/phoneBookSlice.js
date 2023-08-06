import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const contactsState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
};

// const requestOptions = {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(contactsState.contacts.items[0]),
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        'https://64caa0e0700d50e3c7052271.mockapi.io/contacts'
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addNewContacts = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://64caa0e0700d50e3c7052271.mockapi.io/contacts',
        newContact
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts.items.push(action.payload);
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
      const indexElem = state.contacts.items.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.items.splice(indexElem, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts.isLoading = false;
        if (action.payload.length === 0) {
          return;
        }
        state.contacts.items.push(action.payload);
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      })
      .addCase(addNewContacts.pending, state => {
        state.contacts.isLoading = true;
        state.contacts.error = null;
      })
      .addCase(addNewContacts.fulfilled, state => {
        state.contacts.isLoading = false;
        alert('Object was added to DB');
      })
      .addCase(addNewContacts.rejected, (state, action) => {
        state.contacts.isLoading = false;
        state.contacts.error = action.payload;
      });
  },
});

export const Reducer = phoneBookSlice.reducer;

export const { addContact, deleteContact } = phoneBookSlice.actions;
