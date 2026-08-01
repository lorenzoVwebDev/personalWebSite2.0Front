import { useFormContext } from 'react-hook-form'
import MasteringTab from './MasteringTabComponent/MasteringTab'
import { useState } from 'react'
import './Mastering.scss'

type tabType = "balanced" | "low" | "high";
type PropTypes = {
    setRequest: React.Dispatch<React.SetStateAction<string | null>>
}

function Mastering({setRequest}: PropTypes) {
    const {reset} = useFormContext()
    const [tabType, setTabType] = useState<tabType>("balanced")
    const handleChange = (e) => setTabType(e.target.value) 

    return <section className="mastering-section">
        <div className="mastering-title-container">
            <h2>Define your master</h2>
            <button type="button" onClick={() => {
                setRequest(null); 
                reset(); }}>❌</button>
        </div>
        <div className="mastering-tabs-container">
            <input
                id="balanced-tab"
                type="radio"
                value="balanced"
                checked={tabType === "balanced"}
                onChange={handleChange}
            />
            <input
                id="low-tab"
                type="radio"
                value="low"
                checked={tabType === "low"}
                onChange={handleChange}
            />
            <input
                id="high-tab"
                type="radio"
                value="high"
                checked={tabType === "high"}
                onChange={handleChange}
            />
            <div className="mastering-tabs-navbar">
                <label htmlFor="balanced-tab" style={tabType === "balanced" ? {backgroundColor: "green"} : {backgroundColor: ""}}>Balanced</label>
                <label htmlFor="low-tab" style={tabType === "low" ? {backgroundColor: "green"} : {backgroundColor: ""}}>Low Focused</label>
                <label htmlFor="high-tab" style={tabType === "high" ? {backgroundColor: "green"} : {backgroundColor: ""}}>Mid Range Focused</label>
            </div>
        </div>
        <MasteringTab
            tabType={tabType}
        />
    </section>
}

export default Mastering;