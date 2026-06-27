import {type FieldValues} from "react-hook-form";

export async function signUp(data: FieldValues): Promise<number> {
    if (data.confirm_password != data.password) {
        alert("Passwords must be equal")
        return false
    }

    const formData = new FormData();

    Object.entries(data).forEach((entry, index) => {
        if (entry[0] === "avatar") formData.append(entry[0], entry[1][0])
        else formData.append(entry[0], entry[1])
    })

    const response = await fetch(`${import.meta.env.VITE_DEV_API}authentication/signup`, {
        "method": "POST",
        body: formData
    })

    return response.status
}

export async function signIn(data: FieldValues): Promise<Response> {
    const body: {username: string, password: string} = {
        username: "",
        password: ""
    }
    Object.entries(data).forEach((value, index) => {
        switch (value[0]) {
            case ("username"): {
                body.username = value[1]
                break
            }
            default: {
                body.password = value[1]
            }
        }
    })

    const response = await fetch(`${import.meta.env.VITE_DEV_API}authentication/signin`, {
        "method": "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    return response

}