import { useForm, FormProvider} from "react-hook-form"
import { useRef, useState } from 'react';
//components
import SelectRequest from "./SelectRequest/SelectRequest";
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

const selectRequestOptions: string[] = [
  "Select a request",
  "production",
  "mix",
  "master"
];

function Contacts() {
    // const { register, handleSubmit, control, resetField } = useForm<ContactsInterface>()
    const reactFormMethods = useForm<ContactsInterface>()
    const [request, setRequest] = useState<null | string>(null)

  return <>
  <div className="contacts-container">
    <div className="contacts-form-container">
      <h1>Insert your data</h1>
      <FormProvider {...reactFormMethods}>
        <form onSubmit={reactFormMethods.handleSubmit((data) => {
          console.log(data)
          sendContacts(data)
        })} encType='multipart/form-data'>
          {/*name, last-name, email*/}
          <div className="contacts-form-name-container">
            <input {...reactFormMethods.register("first_name", {required: true, maxLength: 20, pattern: alphaRegexp, value: "Lorenzo"})} 
            type="text" placeholder="first-name"/>
            <input {...reactFormMethods.register("last_name", {required: true, maxLength: 20, pattern: alphaRegexp, value: "Viganego"})} type="text" placeholder="last-name"/>
          </div>
          <div className="contacts-form-email-container">
            <input {...reactFormMethods.register("email", {required: true, pattern: emailRegexp, value: "lorenzo.viganego@libero.it"})} type="email" placeholder="email"/>
          </div>
          {/*Select request*/}
          {<SelectRequest 
            request={request} 
            setRequest={setRequest} 
            selectRequestOptions={selectRequestOptions}
          />}
          {/*text area*/}
          <div className="contacts-form-comment-container">
            <textarea {...reactFormMethods.register("comment", {required: false, maxLength: 300, pattern: noHtmlRegexp})} placeholder='Additional Information'>
            </textarea>
          </div>
          {request === "mix" ? null : <button type="submit">{request == null ? "Send Contacts" : "Send Your Song Request"}</button>}
        </form>
      </FormProvider>
    </div>

    <div className="contacts-img-container">
      <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" />
    </div>
  </div>
  </>
}

export default Contacts;