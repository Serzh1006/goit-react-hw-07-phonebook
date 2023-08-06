import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addNewContactsToDB = createAsyncThunk(
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
