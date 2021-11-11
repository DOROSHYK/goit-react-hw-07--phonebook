import axios from "axios";
import shortid from "shortid";
import phoneBookActions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4040";

// axios.defaults.baseURL = "https://618d5dd2fe09aa00174406f0.mockapi.io /contacts";

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

const deleteContact = (id) => async (dispatch) => {
  dispatch(phoneBookActions.deleteContactRequest());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(phoneBookActions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(phoneBookActions.deleteContactError(id));
  }
};

const contactOperation = {
  fetchContact,
  addContact,
  deleteContact,
};

export default contactOperation;
