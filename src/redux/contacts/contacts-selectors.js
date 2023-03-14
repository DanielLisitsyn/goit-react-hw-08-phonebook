export const getContacts = state => state.contacts.items;

export const getFilteredContacts = state => {
  const {
    filter,
    contacts: { items },
  } = state;
  if (!filter) {
    return items;
  }
  const normalizedFilter = filter.toLowerCase();
  const result = items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedFilter) ||
      number.toLowerCase().includes(normalizedFilter)
    );
  });

  return result;
};
