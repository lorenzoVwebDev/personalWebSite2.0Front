import { useFormContext } from "react-hook-form"
import { lazy, Suspense } from "react"
//components
//import SongProduction from "./SongProduction/SongProduction"
import "./SelectRequest.scss"


const SongProduction = lazy(() => import("./SongProduction/SongProduction"))
const Mixing = lazy(() => import("./Mixing/Mixing"))

type PropTypes = {
    request: string | null,
    setRequest:  React.Dispatch<React.SetStateAction<string | null>>,
    selectRequestOptions: string[],
}

function SelectRequest({request, setRequest, selectRequestOptions}: PropTypes) {
    const {register, control, resetField} = useFormContext()

    return request == null ? 
        <><h2>What do you need?</h2>
        <div className="contacts-form-select-request-container">
            <select {...register("request_type", {required: true, value: selectRequestOptions[0],
             onChange: (e) => {
                e.preventDefault()
                if (e.target.value != "Select a request") setRequest(e.target.value)
                else setRequest(null)
                }})}
            >
            {selectRequestOptions.map((option: string, index: number) => {
                return <option key={index} value={option}>
                {option}
                </option>
            })}
            </select>
        </div></> 
    : request === "production" ? 
    request === "production" &&
    <Suspense>
        <SongProduction
        setRequest={setRequest}
        register={register}
        control={control}
        resetField={resetField}
        />
    </Suspense> : 
    <Suspense>
        <Mixing
        setRequest={setRequest}
        />
    </Suspense>
}

export default SelectRequest;