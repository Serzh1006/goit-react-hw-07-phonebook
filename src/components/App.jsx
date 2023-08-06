import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import PhoneBook from './phonebook';
import Loader from './loader/Loader';
import { selectContacts, selectLoading } from 'redux/selectors';
import { fetchContacts } from '../servises/fetchContactsApi';
import 'react-toastify/dist/ReactToastify.css';
import css from './app.module.css';

export const App = () => {
  const isLoading = useSelector(selectLoading);
  const contactsFromState = useSelector(selectContacts);

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
      {isLoading && <Loader />}
      {contactsFromState.length !== 0 && <Contacts />}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
