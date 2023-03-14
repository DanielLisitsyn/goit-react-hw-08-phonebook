import instance from './auth';

export const getAllContacts = () => instance.get('/contacts');

export const deleteContact = id => {
  return instance.delete(`/contacts/${id}`);
};

export const addContact = data => {
  return instance.post('/contacts', data);
};
