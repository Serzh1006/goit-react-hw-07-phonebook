import { useSelector } from 'react-redux';
import ContactsItem from 'components/contactsItem/ContactsItem';
import { visibleContacts } from 'redux/selectors';
import css from './contacts.module.css';

const Contacts = () => {
  const contactsFilters = useSelector(visibleContacts);

  return (
    <ul className={css.contactsList}>
      {contactsFilters.map(contact => {
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
