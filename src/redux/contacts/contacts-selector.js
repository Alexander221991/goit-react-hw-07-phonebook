export const selectContacts = state => state.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items } = contacts;
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) => {
    const normolizedName = name.toLowerCase();
    return normolizedName.includes(normalizedFilter);
  });
  return filteredContacts;
};

