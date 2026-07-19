import {useState} from "react" 
import { Modal } from '@mui/material';
import MixFeaturesModal from "./MixOptionsModal/MixOptionsModal";
import './TabComponent.scss'

type PropTypes = {
    tabType: string
}

type TabComponentTypes = {
    tabType: string, 
    price: number, 
    trackNumber: number | string, 
    days: number
}


function TabComponent({tabType}: PropTypes) {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const tabComponent = ({tabType, price, trackNumber, days}: TabComponentTypes) => 
            <div className="tab-ctnr">
                <header>
                    <h3>
                        <div className="tab-ctnr-price-wrapper">
                            <span>{price}</span>
                        </div>
                    </h3>
                    <p>
                        <b>{tabType}</b>
                        <span> </span>
                        Mixing your song (up to {trackNumber} tracks/stems).
                        Free consultation, up to three rendering
                    </p>
                </header>
                <article>
                    <div className="tab-ctnr-delivery-wrapper">
                        <span aria-hidden="true" style={{width: "16px" ,height: "16px"}}>
                        <svg height="16" viewBox ="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z">
                            </path>
                            <path d="M9 4H7v5h5V7H9V4z">
                            </path>
                        </svg>
                        </span>
                        <b>
                            {days}-day delivery
                        </b>
                        <div className="tab-ctnr-revisions-wrapper">
                        <span aria-hidden="true" className="_94d960 revisions-icon" style={{width: "16px" ,height: "16px"}}>
                            <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50001 11.4999C6.40001 13.3999 9.60001 13.3999 11.5 11.4999C12.2 10.7999 12.7 9.7999 12.9 8.7999L14.9 9.0999C14.7 10.5999 14 11.8999 13 12.8999C10.3 15.5999 5.90001 15.5999 3.10001 12.8999L0.900012 15.0999L0.200012 8.6999L6.60001 9.3999L4.50001 11.4999Z">
                                </path>
                                <path d="M15.8 7.2999L9.40001 6.5999L11.5 4.4999C9.60001 2.5999 6.40001 2.5999 4.50001 4.4999C3.80001 5.1999 3.30001 6.1999 3.10001 7.1999L1.10001 6.8999C1.30001 5.3999 2.00001 4.0999 3.00001 3.0999C4.40001 1.6999 6.10001 1.0999 7.90001 1.0999C9.70001 1.0999 11.5 1.7999 12.8 3.0999L15 0.899902L15.8 7.2999Z">
                                </path>
                            </svg>
                        </span>
                            <b className="revisions">
                                3 Revisions
                            </b>
                        </div>
                    </div>
                    <ul className="tab-ctnr-fetures-list">
                        <li >
                        <span aria-hidden="true" className="_94d960 efabb1a ff7c5d1 a2d90dc" style={{width: "16px" ,height: "16px"}}>
                        <svg fill="currentFill" height="16" viewBox="0 0 11 9" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                            </path>
                        </svg>
                        </span>
                        Mixing
                        </li>
                        <li className="_09ae82 flex flex-items-center">
                        <span aria-hidden="true" className="_94d960 efabb1a ff7c5d1 a2d90dc" style={{width: "16px" ,height: "16px"}}>
                        <svg fill="currentFill" height="16" viewBox="0 0 11 9" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                            </path>
                        </svg>
                        </span>
                        {trackNumber} tracks
                        </li>
                        <li className="_09ae82 flex flex-items-center">
                        <span aria-hidden="true" className="_94d960 efabb1a ff7c5d1 a2d90dc" style={{width: "16px" ,height: "16px"}}>
                        <svg fill="currentFill" height="16" viewBox="0 0 11 9" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z">
                            </path>
                        </svg>
                        </span>
                        Alternate version
                        </li>
                    </ul>
                </article>
                <button type="button" onClick={() => setOpenModal(!openModal)}>Continue</button>
                <Modal
                    open={openModal}
                    aria-labelledby="project-info"
                >
                <MixFeaturesModal
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    tabType={tabType}
                    price={price}
                    trackNumber={trackNumber}
                    days={days}
                />
                </Modal>
            </div>

    switch (tabType) {
        case ("tab2"):
            return tabComponent({tabType: "Standard", price: 200, trackNumber: 25, days: 10})
        case ("tab3"):
            return tabComponent({tabType: "Premium", price: 300, trackNumber: "unlimited", days: 10})
        default:
            return tabComponent({tabType: "Basic", price: 120, trackNumber: 10, days: 7})

    }
}

export default TabComponent