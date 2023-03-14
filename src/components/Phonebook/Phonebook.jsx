import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import PhonebookBlock from 'components/PhonebookBlock/PhonebookBlock';
import PhonebookList from '../PhonebookList/PhonebookList';
import PhonebookForm from 'components/PhonebookForm/PhonebookForm';
import css from './Phonebook-module.css';

import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'redux/contacts/contacts-operations';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilteredContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

const Phonebook = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const onAddContacts = data => {
    dispatch(addContact(data));
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.wrapper}>
      <div className={css.block}>
        <PhonebookBlock title="Phonebook">
          <PhonebookForm onSubmit={onAddContacts} />
        </PhonebookBlock>

        <PhonebookBlock title="Contacts">
          <p className={css.filterTitel}>Find contacts by name</p>
          <input
            name="filter"
            onChange={handleFilterChange}
            value={filter}
            type="text"
          />
          <PhonebookList
            contacts={filteredContacts}
            onDeleteContact={onDeleteContact}
          />
        </PhonebookBlock>
      </div>
    </div>
  );
};

export default Phonebook;
