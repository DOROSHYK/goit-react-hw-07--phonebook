import axios from "axios";
import shortid from "shortid";
import phoneBookActions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContact = () => async (dispatch) => {
  dispatch(phoneBookActions.fetchContactsRequest());
  try {
    const { data } = await axios.get("/contacts");
    dispatch(phoneBookActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(phoneBookActions.fetchContactsError(error));
  }
};

const addContact = (name, number) => async (dispatch) => {
  const contact = {
    id: shortid.generate(),
    name,
    number,
  };
  dispatch(phoneBookActions.addContactRequest());
  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(phoneBookActions.addContactSuccess(data));
  } catch (error) {
    dispatch(phoneBookActions.addContactError(error));
  }
};

const deleteContact = (name) => async (dispatch) => {
  dispatch(phoneBookActions.deleteContactRequest());
  try {
    await axios.delete(`/contacts/${name}`);
    dispatch(phoneBookActions.deleteContactSuccess(name));
  } catch (error) {
    dispatch(phoneBookActions.deleteContactError(name));
  }
};

const contactOperation = {
  fetchContact,
  addContact,
  deleteContact,
};

export default contactOperation;
