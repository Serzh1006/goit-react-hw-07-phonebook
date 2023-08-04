import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import ContactsItem from 'components/contactsItem/ContactsItem';
import css from './contacts.module.css';

const Contacts = () => {
  const contactsArray = useSelector(selectContacts);
  const normilizedFilter = useSelector(selectFilter).toLowerCase();
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
