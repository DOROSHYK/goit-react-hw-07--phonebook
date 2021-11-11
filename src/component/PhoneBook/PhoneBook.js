import React from "react";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import contactOperation from "../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import shortid from "shortid";
import style from "./PhoneBook.module.css";

const Phonebook = ({ id }) => {
  // const keyId = shortid.generate();
  const filterContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = (id) => dispatch(contactOperation.deleteContact);
  return (
    <div className={style.itemContainer}>
      <ul>
        {filterContacts.map(({ name, number }) => (
          <li className={style.item} key={shortid.generate()}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              className={style.deleteButton}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              <p className={style.centr}>❌</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Phonebook;

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
//   return visibleContacts;
// };

// const mapStateToProps = ({ contacts: {contacts, filter } }) => ({
//   contacts: getVisibleContacts(contacts, filter),
// });

// const mapDispatchToProps = dispatch => ({
//   onDelete: (name) => dispatch(phoneBookActions.deleteContact(name)),

// }

// )

// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
