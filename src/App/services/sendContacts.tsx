import { type FieldValues} from "react-hook-form"

interface DataInterface {
    first_name: string,
    last_name: string,
    email: string
    comment?: string
}
async function sendContacts(data: FieldValues): Promise<boolean> {

    const alphaRegexp = /^[A-Za-z]+$/;
    const emailRegexp = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
    // if (!alphaRegexp.test(data.first_name) || !alphaRegexp.test(data.last_name) || !emailRegexp.test(data.email)) return;
        console.log("hello")
    const response = await fetch(`${import.meta.env.VITE_DEV_API}contacts`, {
        method: "POST",
        body: JSON.stringify(data),
        credentials: "omit",
        cache: "no-store",
        headers: {
            "Content-Type": "application/json"
        } 
    })

    if (response.ok) {
        return true
    } else {
        return false
    }
}

export default sendContacts;