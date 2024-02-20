import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65d4ff943f1ab8c634366b2d.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
