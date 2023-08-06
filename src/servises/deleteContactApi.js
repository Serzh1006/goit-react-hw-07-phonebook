import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const deleteContactUser = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://64caa0e0700d50e3c7052271.mockapi.io/contacts/${id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
