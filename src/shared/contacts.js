import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://640eef75cde47f68db3c4e7f.mockapi.io',
});

export const getAllContacts = () => contactsInstance.get('/contacts');

export const deleteContact = id => {
  return contactsInstance.delete(`/contacts/${id}`);
};

export const addContact = data => {
  return contactsInstance.post('/contacts', data);
};
