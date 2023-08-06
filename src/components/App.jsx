import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectContacts } from 'redux/selectors';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import PhoneBook from './phonebook';
import { fetchContacts } from '../redux/phoneBookSlice';
import css from './app.module.css';

export const App = () => {
  // const contactsFromState = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.phoneBook}>Phonebook</h2>
      <PhoneBook />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      {/* {contactsFromState.length !== 0 && <Contacts />} */}
    </div>
  );
};
