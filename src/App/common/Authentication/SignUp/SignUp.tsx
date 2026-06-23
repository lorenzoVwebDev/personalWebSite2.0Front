import "./SignUp.scss"
import { useState } from "react";
import { useForm } from "react-hook-form"
import {BlinkBlur} from 'react-loading-indicators'
//services
import { signUp } from "../../../services/authenticationService";

const usernameRegex = /^(?=.{3,20}$)[a-zA-Z0-9](?:[a-zA-Z0-9._]{1,18}[a-zA-Z0-9])?$/
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
const MAX_SIZE_FILE = 2 * 1024 * 1024

function SignUp() {
    const [state, setState] = useState<string>()
    const {register, handleSubmit, watch, formState} = useForm();

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        console.log(file)
        switch (file.type) {
            case ("image/png"): {
                break;
            }
            case ("image/jpeg"): {
                break;
            }
            case ("image/webp"): {
                break;
            }
            default: {
                alert("File must be of .web, .png or .jpeg extension")
                e.target.value = ""
                return
            }
        }
        if (file.size > MAX_SIZE_FILE) {
            alert("File must be below 2mb")
            e.target.value = ""
            return
        }
    }

    return <div className="sign-up-container">
            <section className="sign-up-form-section">
                <h1>Sign Up</h1>
                {state === "waiting" ? <BlinkBlur color="#12f7ff" size="large" text="Loading" textColor="#12f7ff" /> :
                <form onSubmit={handleSubmit(async (data) => {
                        setState("waiting")
                        const response = await signUp(data)
                        if (response) setState("ready")
                        else setState("error")
                    })}>
                    <div className="sign-up-input-ctnr">
                        <label htmlFor="sign-up-username">Username</label>
                        <input {...register("username", {required: true, pattern: usernameRegex, value: "lorenzo"})} type="text" id="sign-up-username"/>
                    </div>
                    <div className="sign-up-input-ctnr">
                        <label htmlFor="sign-up-email">Email</label>
                        <input {...register("email", {required: true, pattern: emailRegex, value: "lorenzo.viganego@libero.it"})} type="email" />
                    </div>
                    <div className="sign-up-input-ctnr">
                        <label htmlFor="sign-up-pwd">Password</label>
                        <input {...register("password", {required: true, pattern: passwordRegex, value: "Password$1"})} type="password" />
                    </div>
                    <div className="sign-up-input-ctnr">
                        <label htmlFor="sign-up-confirm-pwd">Confirm Password</label>
                        <input {...register("confirm_password", {required: true, pattern: passwordRegex, value: "Password$1"})} type="password" />
                    </div>
                    <div className="sign-up-input-ctnr">
                        <label htmlFor="avatar">Avatar</label>
                        <input {...register("avatar", {required: false, onChange: handleFileChange})} type="file" id="avatar" placeholder="avatar" 
                        accept=".jpeg,.png,.web,image/png,image/jpeg,image/webp"/>
                    </div>
                    <button type="submit" disabled={formState.isValid ? false : true}>Send Data</button>
                </form>}
            </section>
            <section className="sign-up-image-section">
                <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="lwd-image" />
            </section>
        </div>
}

export default SignUp