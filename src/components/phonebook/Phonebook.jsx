import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/phoneBookSlice';
import { getContacts } from 'redux/selectors';
import css from './phonebook.module.css';

const PhoneBook = () => {
  const [nameUser, setNameUser] = useState('');
  const [number, setNumber] = useState('');

  const dataContacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const getValue = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setNameUser(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const findName = dataContacts.find(
      contact => contact.nameUser === nameUser
    );
    if (findName !== undefined) {
      alert(`${findName.nameUser} is already in contacts`);
      setNameUser('');
      setNumber('');
      return;
    } else {
      dispatch(addContact(nameUser, number));
    }
    setNameUser('');
    setNumber('');
  };

  return (
    <form className={css.formPhonebook} onSubmit={onSubmitForm}>
      <label className={css.label}>
        Name
        <input
          className={css.input}
          type="text"
          name="name"
          autoComplete="off"
          value={nameUser}
          autoFocus="on"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={getValue}
        />
      </label>

      <label className={css.label}>
        Number
        <input
          className={css.input}
          type="tel"
          name="number"
          autoComplete="off"
          value={number}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={getValue}
        />
      </label>

      <button className={css.btnSubmit} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default PhoneBook;
