import {useEffect, useState} from "react"
import { Controller, useFormContext } from "react-hook-form"
import AdditionalInformation from "./AdditionalInformation/AdditionalInformation"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./SongProduction.scss"

type PropTypes = {
    setRequest: React.Dispatch<React.SetStateAction<string | null>>
}

function SongProduction({setRequest}: PropTypes) {
    const {register, control, reset } = useFormContext()
    const [musicArray, setMusicArray] = useState<string[]>([])

    useEffect(() => {
        const controller = new AbortController();

        async function requestMusicArray(controller: AbortController): Promise<void | boolean> {
            if (musicArray.length > 0) return

            const response = await fetch(`${import.meta.env.VITE_DEV_API}musicarray`, {
                signal: controller.signal
            })

            if (response.ok) {
                const musicArray = await response.json()
                setMusicArray(musicArray)
                return true
            } else return false
        } 

        requestMusicArray(controller);

        return () => {
            controller.abort()
        }
        
    }, []) 

    return <section className="song-production-section">
        <div className="song-production-title-container">
            <h2>Define your music production</h2>
            <button type="button" onClick={(e) => {
                setRequest(null)
                reset()
            }}>❌</button>
        </div>
        <div className="song-production-specification-container">
            <label htmlFor="genres">Genre</label>
            <select {...register("genre", {required: true})} id="genres">
            {musicArray.length < 1 ? "hello" : 
            musicArray.map((genre, index) => {
                return <option value={genre} key={index}>{genre}</option>
            })}
            </select>
            <label htmlFor="tracks-number">
            Tracks Number
            </label>
            <input {...register("tracks_number",
                {required: true, max: 25, min: 5, value: 5}
            )} type="number" id="tracks-number" max="25" min="5"
            />
        </div>
        <div className="song-production-phone-container">
            <div>
                <Controller
                    control={control}
                    name="phone_number"
                    render={({ field: { onChange, value } }) => (<PhoneInput
                    placeholder={"Enter mobile phone number"}
                    value={value}
                    defaultCountry="IT"
                    onChange={onChange}
                    limitMaxLength={true}
                />)}
                />
            </div>
            <div>
                <label htmlFor="whatapp-check">Check to be reached out on your phone via Whatsapp ➡️</label>
                <input  {...register("wapp_contact", {required: false})} type="checkbox" id="whatapp-check"/>
            </div>
        </div>
        {/* AdditionalInformation component*/}
        <AdditionalInformation
            register={register}
        />
    </section>

} 

export default SongProduction;


