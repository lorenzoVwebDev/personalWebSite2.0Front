import {type FieldValues} from "react-hook-form";

export async function signUp(data: FieldValues): Promise<boolean> {
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

    if (response.ok) {
        return true
    } else return false
}

