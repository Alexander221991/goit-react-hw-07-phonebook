import { createAsyncThunk } from '@reduxjs/toolkit';

import * as contactsApi from '../../api/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const data = await contactsApi.requestFetchContacts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (body, { rejectWithValue }) => {
    try {
      const data = await contactsApi.requestAddContacts(body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: ({ name }, { getState }) => {
      const { contacts } = getState();
      const normolizedName = name.toLowerCase();

      const dublicate = contacts.items.find(item => {
        const normalizedCurrentName = item.name.toLowerCase();
        return normalizedCurrentName === normolizedName;
      });

      if (dublicate) {
        alert(` ${name} is already in contacts`);
        return false;
      }
    },
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact1',
  async (id, { rejectWithValue }) => {
    try {
      await contactsApi.requestDeleteContacts(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
