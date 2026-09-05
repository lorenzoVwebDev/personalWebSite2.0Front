import { useFormContext } from 'react-hook-form'
import TabComponent from './TabComponent/TabComponent'
import { useState } from 'react'
import './Mixing.scss'

type PropTypes = {
    setRequest: React.Dispatch<React.SetStateAction<string | null>>
}

function Mixing({setRequest}: PropTypes) {
    const {reset} = useFormContext();
    const [tabType, setTabType] = useState("tab1");    

    const handleChange = (e) => {
        setTabType(e.target.value)
    }

    return <section className="mixing-section">
        <div className="mixing-title-container">
            <h2>Define your mix</h2>
            <button type="button" onClick={(e) => {
                setRequest(null)
                reset()
            }}>❌</button>
        </div>
        <div className="mixing-tabs-container">
            <input id="package-tab-1" type="radio" 
                checked={tabType === "tab1"}
                value="tab1"
                onChange={handleChange}
            />
            <input id="package-tab-2" type="radio" 
                checked={tabType === "tab2"}
                value="tab2"
                onChange={handleChange}
            />
            <input id="package-tab-3" type="radio" 
                checked={tabType === "tab3"}
                value="tab3"
                onChange={handleChange}
            />
            <div className="mixing-tabs-navbar">
                <label htmlFor="package-tab-1" style={tabType === "tab1" ? {backgroundColor: "green"} : {backgroundColor: ""}}>Basic</label>
                <label htmlFor="package-tab-2" style={tabType === "tab2" ? {backgroundColor: "green"} : {backgroundColor: ""}}>Standard</label>
                <label htmlFor="package-tab-3" style={tabType === "tab3" ? {backgroundColor: "green"} : {backgroundColor: ""}}>Premium</label>
            </div>
            <TabComponent 
                tabType={tabType}
            />
        </div>
    </section>

}

export default Mixing