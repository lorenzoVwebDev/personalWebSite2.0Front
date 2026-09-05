import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useForm, FormProvider} from "react-hook-form"
//components
import SelectRequest from "./SelectRequest/SelectRequest";
import sendContacts from '../services/sendContacts';
import { Modal } from '@mui/material';
import { Box} from '@mui/material';
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
    const navigate = useNavigate()
    const [responseObj, setResponseObj] = useState< null | {response: string, status: number}>(null)
    // const { register, handleSubmit, control, resetField } = useForm<ContactsInterface>()
    const reactFormMethods = useForm<ContactsInterface>()
    const [request, setRequest] = useState<null | string>(null)
    const [responseStatus, setResponseStatus] = useState<null | number>(null)

    useEffect(() => {
      if (responseObj == null) return 
      if (responseObj.status >= 300 && responseObj.status <= 500) throw new Error(JSON.stringify(responseObj))
     
    }, [responseObj])

  return <>
  <div className="contacts-container">
    <div className="contacts-form-container">
      <h1>Insert your data</h1>
      <FormProvider {...reactFormMethods}>
        <form onSubmit={reactFormMethods.handleSubmit(async (data) => {
            const responseObj = await sendContacts(data)
            setResponseObj(responseObj)
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
          {request === "mix" || request === "master" ? null : <button type="submit">{request == null ? "Send Contacts" : "Send Your Song Request"}</button>}
        </form>
      </FormProvider>
    </div>

    <div className="contacts-img-container">
      <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" />
    </div>
  </div>
      <Modal
        open={responseObj?.status === 200 && true}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "40%",
            border: "solid black 3px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <p>Thank you so much for requesting a {request === null ? "contact" : request}!</p>
          <p>You'll receive an email with further instructions in short time!</p>
          <button style={{color: "red", cursor: "pointer"}} onClick={() => {
            setResponseObj(null)
            navigate("/")
          }}>X</button>
      </Box>
    </Modal>
  </>
}

export default Contacts;