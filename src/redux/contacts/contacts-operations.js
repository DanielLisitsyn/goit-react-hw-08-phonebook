import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/contacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response);
    }
  }
);

const isDublicate = (contacts, { name }) => {
  const normalizedName = name.toLowerCase();
  const dublicate = contacts.find(item => {
    return item.name.toLowerCase() === normalizedName;
  });

  return Boolean(dublicate);
};

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      if (isDublicate(contacts.items, data)) {
        alert(`${data.name} is already in contacts`);
        return false;
      }
    },
  }
);
export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      return id;
    } catch ({ response }) {
      return rejectWithValue(response);
    }
  }
);
