import {useState} from 'react'
import { useForm, type FieldValues} from "react-hook-form"
import sendContacts from '../services/sendContacts';
import './Contacts.scss';

interface ContactsInterface {
  first_name: string,
  last_name: string,
  email: string,
  comment?: string
}

const initContacts: ContactsInterface = {
  first_name: "",
  last_name: "",
  email: "",
  comment: ""
}

function Contacts() {
  const {register, handleSubmit, watch, formState: {errors}} = useForm();
  const [contacts, setContacts] = useState<ContactsInterface>(initContacts);

  // console.log(watch());

  return <>
  <div className="contacts-container">
  <div className="contacts-form-container">
    <h1>Insert your data</h1>
    <form onSubmit={handleSubmit(async (data) => {
      const bool = await sendContacts(data)
      console.log(bool)
    })}>
      <div className="contacts-form-name-container">
        <input {...register("first_name")} type="text" placeholder="first-name" name="first-name"/>
        <input {...register("last_name")} type="text" placeholder="last-name" name="last-name"/>
      </div>
      <div className="contacts-form-email-container">
        <input {...register("email")}type="email" placeholder="email"/>
      </div>
      <div className="contacts-form-comment-container">
        <textarea {...register("comment")} name="comment" placeholder='comment'>
        </textarea>
      </div>
      <button type="submit">Send Contacts</button>
    </form>
  </div>

  <div className="contacts-img-container">
    <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" />
  </div>
  </div>
  </>
}

export default Contacts;