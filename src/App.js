import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import shortid from 'shortid';
import InputForm from "./component/InputForm/InputForm";
import Phonebook from "./component/PhoneBook/PhoneBook";
import Filter from "./component/Filter/Filter";
import contactOperation from "./redux/contacts/contacts-operations";
import "./App.css";
import { getContacts } from "redux/contacts/contacts-selectors";
// import store from './redux/store';
// import { myAction } from './redux/contacts/contacts-actions';
// console.log(store);
// console.log(store.getState());

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(contactOperation.fetchContact());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        <h1 className="title"> PhoneBook </h1>
        <InputForm />

        <Filter />

        {contacts && <Phonebook />}
      </div>
    </>
  );
}

export default App;
