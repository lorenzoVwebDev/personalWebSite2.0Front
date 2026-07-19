import { type FieldValues} from "react-hook-form"

interface DataInterface {
    first_name: string,
    last_name: string,
    email: string
    comment?: string
}
//
async function sendContacts(data: FieldValues): Promise<boolean> {
    const alphaRegexp = /^[A-Za-z]+$/;
    const emailRegexp = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    
    const endPoint = data.request_type === "Select a request" ? "plain" : data.request_type
    const formData = new FormData()

    Object.entries(data).forEach((entry, index) => {
        if (entry[0] === "audio_file") formData.append(entry[0], entry[1][0])
        else formData.append(entry[0], entry[1])
    })

    const response = await fetch(`${import.meta.env.VITE_DEV_API}contacts/${endPoint}`, {
        method: "POST",
        body: formData,
        credentials: "same-origin",
        cache: "no-store"
    })

    if (response.ok) {
        return true
    } else {
        return false
    }
}

export default sendContacts;