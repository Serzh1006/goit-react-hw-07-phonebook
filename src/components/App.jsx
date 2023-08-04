import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import PhoneBook from './phonebook';
import css from './app.module.css';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contactsFromState = useSelector(selectContacts);

  return (
    <div>
      <h2 className={css.phoneBook}>Phonebook</h2>
      <PhoneBook />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      {contactsFromState.length !== 0 && <Contacts />}
    </div>
  );
};
