import { getContacts } from "../../redux/contacts/contacts-selectors";

// import { getIsAdded } from '../../redux/contacts/contacts-selectors';
import { toast } from "react-toastify";
// import shortid from 'shortid';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactOperation from "../../redux/contacts/contacts-operations";
import style from "./InputForm.module.css";
function InputForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handelChange = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (name, number) => {
    // event.preventDefault();

    if (name === "") {
      toast.warn("Please enter the contact's name!");
      return;
    }

    if (number === "") {
      toast.warn("Please enter the contact's phone number!");
      return;
    }

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      // toast.warn(`${name} is already in contacts.`);
      alert(`${name} is already in contacts.`);
      reset();
      return;
    }
    dispatch(contactOperation.addContact(name, number));
    toast.success("Contact has been added to your phonebook!");
    reset();
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(name, number);
    reset();
  };

  return (
    <form className={style.Form} onSubmit={onSubmit}>
      <div className={style.InputForm}>
        <label>Имя</label>

        <input
          className={style.FormInput}
          value={name}
          // onChange={handelChange}
          onChange={(event) => setName(event.target.value)}
          type="tex"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </div>

      <div className={style.InputForm}>
        <label>Телефон</label>
        <input
          className={style.FormInput}
          // id={phoneNumberInputId}
          value={number}
          onChange={handelChange}
          // onChange={event => setNumber(event.target.value)}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </div>
      <button className={style.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

export default InputForm;
// const mapStateToProps = ({ contacts: { contacts } }) => ({
//   contacts,
// });

// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(actions.addContact({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
