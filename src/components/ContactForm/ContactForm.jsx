import { useState, useMemo, memo, useCallback } from 'react';
import { nanoid } from 'nanoid';

import styles from './contact-form.module.css';

const INITIAL_STATE = {
  name: '',
  phone: '',
};
// phone instead of number

const ContactForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...INITIAL_STATE });

  const handleChange = useCallback(({ target }) => {
    const { name, value } = target;

    setState(prevState => ({ ...prevState, [name]: value }));
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({ ...state });

    reset();
  };

  const reset = useCallback(() => {
    setState({ ...INITIAL_STATE });
  }, []);

  const phoneBookID = useMemo(() => nanoid(), []);
  const phoneNumberID = useMemo(() => nanoid(), []);

  const { name, phone } = state;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.phonebook}>
        <label className={styles.label} htmlFor={phoneBookID}>
          Name
        </label>
        <input
          className={styles.input}
          value={name}
          type="text"
          name="name"
          onChange={handleChange}
          id={phoneBookID}
          placeholder="enter new contact"
          required
        ></input>
        <label className={styles.label} htmlFor={phoneNumberID}>
          Number
        </label>
        <input
          className={styles.input}
          value={phone}
          type="tel"
          name="phone"
          onChange={handleChange}
          id={phoneNumberID}
          placeholder="enter phone number"
          required
        ></input>
        <button className={styles.phonebtn} type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default memo(ContactForm);
