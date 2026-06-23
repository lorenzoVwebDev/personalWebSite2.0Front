import { useReducer } from "react"
import "./AdditionalInformation.scss"
const youtubeRegex =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})([?&].*)?$/;

enum inputTypeEnum {
    VOCAL_INPUT,
    REFERENCE_INPUT,
}

type ReducerStateType = {
    vocalInput: boolean,
    referenceInput: boolean
}

type PropTypes = {
    register: any
}

function reducer(state: ReducerStateType, action: {
    type: inputTypeEnum,
    inputState: boolean
}) {
    switch (action.type) {
        case(inputTypeEnum.VOCAL_INPUT): {
            return {
                ...state,
                vocalInput: action.inputState
            }
        } 
        case(inputTypeEnum.REFERENCE_INPUT): {
            return {
                ...state,
                referenceInput: action.inputState
            }
        }
    }
}

function AdditionalInformation({register}: PropTypes) {
    const [state, dispatch] = useReducer( reducer, {
        vocalInput: false,
        referenceInput: false
    })
    
    const MAX_FILE_SIZE = 50 * 1024 * 1024;

    const handleFileOnchange = (e) => {
        const file = e.target.files[0];

        if (!file) return

        switch (file.type) {
            case ("audio/wav"): {
                break;
            }
            case ("audio/mpeg"): {
                break;
            }
            case ("audio/x-wav"): {
                break;
            }
            default: {
                alert("File must be of .wav or .mp3 extension");
                e.target.value = ""
                return;
            }
        }

        if (file.size > MAX_FILE_SIZE) {
            alert("File size must be below 52mb")
            e.target.value = "";
            return
        }
    }

    return <>        
            <div className="song-production-vocals-container">
            <div>
                <h3>
                Do you have your own 
                </h3>
                <h3>
                vocal recording or reference?
                </h3>
            </div>
            <div>
            <label className="switch">
                <input type="checkbox" onChange={(e) => {
                    dispatch({
                        type: inputTypeEnum.VOCAL_INPUT,
                        inputState: e.target.checked
                    })
                }} />
                <span className="slider"></span>
            </label>
            </div>
        </div>
            {state.vocalInput && <>
                <input {...register("audio_file", {required: false, onChange: handleFileOnchange })} 
                type="file" size={MAX_FILE_SIZE} accept=".wav,audio/wav,audio/x-wav,audio/mpeg,.mp3"
                />
            </>}
        <div className="song-production-vocals-container">
            <div>
                <h3>
                Do you have some  
                </h3>
                <h3>
                reference tracks? (max 3)
                </h3>
            </div>
            <div>
            <label className="switch">
                <input type="checkbox" onChange={(e) => {
                    dispatch({
                        type: inputTypeEnum.REFERENCE_INPUT,
                        inputState: e.target.checked
                    })
                }} />
                <span className="slider"></span>
            </label>
            </div>
        </div>
            {state.referenceInput && <>
                <label htmlFor="reference-1">Reference 1</label>
                <input {...register("reference1", {required: false, pattern: youtubeRegex})} type="text" placeholder="youtube url" id="reference-1"
                />
                <label htmlFor="reference-2">Reference 2</label>
                <input {...register("reference2", {required: false, pattern: youtubeRegex})} type="text" placeholder="youtube url" id="reference-2"
                />
                <label htmlFor="reference-2">Reference 3</label>
                <input {...register("reference3", {required: false, pattern: youtubeRegex})} type="text" placeholder="youtube url" id="reference-3"
                />
            </>}
        </>
}

export default AdditionalInformation