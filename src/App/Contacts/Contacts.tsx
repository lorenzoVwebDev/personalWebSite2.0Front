import { useForm} from "react-hook-form"
import sendContacts from '../services/sendContacts';
import './Contacts.scss';
//regexp
const emailRegexp = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
const alphaRegexp = /^[A-Za-z]+$/;
const noHtmlRegexp = /^[^<>]*$/

//interface
interface ContactsInterface {
  first_name: string,
  last_name: string,
  email: string,
  comment?: string
}
//hooks init
const initContacts: ContactsInterface = {
  first_name: "",
  last_name: "",
  email: "",
  comment: ""
}

function Contacts() {
    const { register, handleSubmit } = useForm<ContactsInterface>()

  return <>
  <div className="contacts-container">
  <div className="contacts-form-container">
    <h1>Insert your data</h1>
    <form onSubmit={handleSubmit((data) => {
      sendContacts(data)
    })}>
      <div className="contacts-form-name-container">
        <input {...register("first_name", {required: true, maxLength: 20, pattern: alphaRegexp, value: "Lorenzo"})} 
        type="text" placeholder="first-name"/>
        <input {...register("last_name", {required: true, maxLength: 20, pattern: alphaRegexp, value: "Viganego"})} type="text" placeholder="last-name"/>
      </div>
      <div className="contacts-form-email-container">
        <input {...register("email", {required: true, pattern: emailRegexp, value: "lorenzo.viganego@libero.it"})} type="email" placeholder="email"/>
      </div>
      <div className="contacts-form-comment-container">
        <textarea {...register("comment", {required: false, maxLength: 300, pattern: noHtmlRegexp})} placeholder='comment'>
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