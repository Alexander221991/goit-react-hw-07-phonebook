import styles from './contact-list.module.css';

const ContactList = ({ items, deleteContact }) => {
  const elements = items.map(({ id, name, phone }) => (
    <li key={id} className={styles.contacts}>
      {name}: {phone}{' '}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default ContactList;
