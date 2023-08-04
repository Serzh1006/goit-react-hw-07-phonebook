import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactsItem from 'components/contactsItem/ContactsItem';
import css from './contacts.module.css';

const Contacts = () => {
  const contactsArray = useSelector(getContacts);
  const normilizedFilter = useSelector(getFilter).toLowerCase();
  const filterContacts = contactsArray.filter(contact =>
    contact.nameUser.toLowerCase().includes(normilizedFilter)
  );

  return (
    <ul className={css.contactsList}>
      {filterContacts.map(contact => {
        return (
          <ContactsItem
            key={contact.id}
            id={contact.id}
            nameUser={contact.nameUser}
            number={contact.number}
          />
        );
      })}
    </ul>
  );
};

export default Contacts;
