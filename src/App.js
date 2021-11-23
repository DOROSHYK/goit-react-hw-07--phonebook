import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputForm from "./component/InputForm/InputForm";
import Phonebook from "./component/PhoneBook/PhoneBook";
import Filter from "./component/Filter/Filter";
import contactOperation from "./redux/contacts/contacts-operations";
import "./App.css";
import { getContacts } from "redux/contacts/contacts-selectors";

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
        <ToastContainer
          autoClose={3000}
          position="top-center"
          theme="colored"
        />
        <Filter />

        {contacts && <Phonebook />}
      </div>
    </>
  );
}

export default App;
