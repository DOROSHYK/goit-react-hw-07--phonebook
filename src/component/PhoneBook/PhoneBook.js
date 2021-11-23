import React from "react";
import { getVisibleContacts } from "../../redux/contacts/contacts-selectors";
import contactOperation from "../../redux/contacts/contacts-operations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import style from "./PhoneBook.module.css";

const Phonebook = ({ id }) => {
  const filterContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <div className={style.itemContainer}>
      <ul>
        {filterContacts.map(({ name, number, id }) => (
          <li className={style.item} key={id}>
            <span>{name}: </span>
            <span>{number} </span>
            <button
              className={style.deleteButton}
              type="button"
              onClick={() => dispatch(contactOperation.deleteContact(id))}
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
