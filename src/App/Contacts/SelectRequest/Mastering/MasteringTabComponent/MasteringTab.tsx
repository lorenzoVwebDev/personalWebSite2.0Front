import { useState } from 'react'
import { Modal } from '@mui/material'
import MasteringOptionsModal from './MasteringOptionsModal/MasteringOptionsModal'
import './MasteringTab.scss'
type PropTypes = {
    tabType: "low" | "balanced" | "high"
}

function MasteringTab({tabType}: PropTypes) {
    const [openModal, setOpenModal] = useState<boolean>(false)

    return <div className="mastering-tab">
        <header>
            <h3>
                <div className="mastering-tab-price-wrapper">
                    <span>70</span>
                </div>
            </h3>
            <p>
                <b>{tabType}</b>
                <span> </span>
                Mastering Your song 
            </p>
        </header>
        <article>
            <div className="mastering-tab-delivery-wrapper">
                <span aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                    <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                        <path d="M9 4H7v5h5V7H9V4z"></path>
                    </svg>
                </span>
                <b>up to 3-day delivery</b>
                <div className="mastering-tab-revisions-wrapper">
                    <span aria-hidden="true" className="revisions-icon" style={{ width: '16px', height: '16px' }}>
                        <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z"></path>
                            <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z"></path>
                        </svg>
                    </span>
                    <b className="revisions">3 Revisions</b>
                </div>
            </div>
            <ul className="mastering-tab-features-list">
                <li>
                    <span aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                        <svg fill="currentFill" height="16" viewBox="0 0 11 9" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span> </span>
                    </span>
                    Mastering
                </li>
                <li>
                    <span aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                        <svg fill="currentFill" height="16" viewBox="0 0 11 9" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span> </span>
                    </span>
                    {tabType} focused master type suggested for {tabType === "balanced" 
                        ? "Pop, EDM, Rock, Funk, Country" 
                        : tabType === "high" 
                        ? "Classical, Acoustic, Jazz, Ambient, Singer-Songwriter" 
                        : "Hip-Hop, Trap, Dubstep, Bass Music, Reggae"
                    }
                </li>
                <li>
                    <span aria-hidden="true" style={{ width: '16px', height: '16px' }}>
                        <svg fill="currentFill" height="16" viewBox="0 0 11 9" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path>
                        </svg>
                        <span> </span>
                    </span>
                    Alternate version and 3 revisions
                </li>
            </ul>
        </article>
        <button type="button" onClick={() => setOpenModal(!openModal)}>Continue</button>
        <Modal open={openModal} aria-labelledby="project-info">
            <MasteringOptionsModal
            setOpenModal={setOpenModal}
            openModal={openModal}
            tabType={tabType}
            />
        </Modal>
    </div>
}

export default MasteringTab
