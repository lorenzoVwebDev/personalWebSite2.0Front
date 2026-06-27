import "./SignIn.scss"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { signIn } from "../../../services/authenticationService";
import {BlinkBlur} from 'react-loading-indicators'
import { useNavigate } from "react-router";
import { passwordRegex, usernameOrEmailRegex } from "../../../utils/regex";


function SignIn() {
    const navigate = useNavigate()
    const [formResponse, setFormResponse] = useState<string | null>(null)
    const {register, handleSubmit, reset, formState} = useForm()

    return <div className="sign-in-container">
        <section className="sign-in-form-section">
            {formResponse === "ok" ? <h2>Signed In</h2>: <>
            <h1>Sign In</h1>
            {formResponse === "wrong-username" ? <p style={{color: "red"}}>Username not exists</p> : 
            formResponse === "wrong-password" ? <p style={{color: "red"}}>Wrong password</p> : 
            formResponse === "attempts-excedeed" ? <p style={{color: "red"}}>Too many attempts, try again in 5 minutes</p> : null}
            <form onSubmit={handleSubmit(async (data) => {
                setFormResponse("waiting")
                const response = await signIn(data)
                switch (response.status) {
                    case (200): {
                        setFormResponse("ok")
                        setTimeout(() => {
                        navigate("/")
                        setFormResponse(null)
                        }, 3000)
                        break;
                    }
                    case (400): {
                        const body = await response.json()
                        if (body.response === "missing-credentials") window.location.reload()
                        else {
                            setFormResponse("wrong-username");
                            reset()
                        }
                        break;
                    }
                    case (410): {
                        reset();
                        navigate("/authentication/changepwd")
                        break;
                    }
                    case (401): {
                        const body = await response.json()
                        if (body.response === "wrong-password")
                        setFormResponse("wrong-password")
                        else setFormResponse("attempts-excedeed")
                        break;
                    }
                    default: {
                        navigate("/servererror")
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
            </>
            }    
        </section>
        <section className="sign-in-img-section">
            <img src={`${import.meta.env.VITE_DEV_API}images/lwd-image.webp`} alt="" />
        </section>
    </div>
}

export default SignIn;