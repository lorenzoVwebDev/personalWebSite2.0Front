import "./SignIn.scss"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { signIn } from "../../../services/authenticationService";
import {BlinkBlur} from 'react-loading-indicators'
import { useNavigate } from "react-router";
import { passwordRegex, usernameOrEmailRegex } from "../../../utils/regex";


function SignIn() {
    const [formResponse, setFormResponse] = useState<string | null>(null)
    const {register, handleSubmit, reset, formState} = useForm()

    return <div className="sign-in-container">
        <section className="sign-in-form-section">
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit(async (data) => {
                setFormResponse("waiting")
                const response = await signIn(data)
                switch (response.status) {
                    case (400): {
                        const body = await response.json()
                        if (body.response === "missing-credentials") window.location.reload()
                        else  
                        break;
                    }
                    default: {
                        console.log(response)
                    }

                }
                })}>
                <div className="sign-in-input-ctnr">
                    <label htmlFor="username">Username</label>
                    <input {...register("username", {required: true, pattern: usernameOrEmailRegex, min: 5, max: 50, value: "lorenzo"})} type="text" id="username"/>
                </div>
                <div className="sign-in-input-ctnr">
                    <label htmlFor="password">Password</label>
                    <input {...register("password", {required: true, pattern: passwordRegex, value: "Password$1"})} type="text" id="password"/>
                </div>
                <button type="submit" disabled={formState.isValid ? false : true}>Send Data</button>    
            </form>    
        </section>
        <section className="sign-in-img-section">
            <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" />
        </section>
    </div>
}

export default SignIn;