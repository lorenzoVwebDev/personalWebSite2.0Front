import NeonButton from "@common/NeonButton/NeonButton"
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import "./MixFeaturesModal.scss"
//react-icons
import { RxMixerVertical, RxMixerHorizontal } from "react-icons/rx";
import { FaReact, FaAngular, FaNode, FaPhp, FaHtml5  } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";


type PropTypes = {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    openModal: boolean,
    tabType: string
}

function MixFeaturesModal({setOpenModal, openModal, tabType}: PropTypes) {
    const array = Array.from("len")
  return ((
              <Box className="devport-infomodal-ctnr-total">
              <Box className="devport-infomodal-ctnr">
              <Typography className="devport-infomodal-header">{tabType}</Typography>
              <div className="devport-infomodal-icon-ctnr">
                {array.map((value, index) => {
                    if (index%2 === 0) return <RxMixerHorizontal/>
                    else return <RxMixerVertical/>
                })}
              </div>
              <Typography className="devport-infomodal-description">
                {tabType}
              </Typography>
              
{/*               <NeonButton
                action={window.open}
                actionParameters={modalProject.href}
                buttonText={'Go To Project'}
                classString={'btn'}
                style={{
                 width: '15rem',
                 height: '3rem',
                }}
              /> */}
              <Button onClick={() => {
                setOpenModal(!openModal)
              }} size="large" sx={{
                position: "absolute",
                top: -10,
                right: -15
              }}><Icon color="action" fontSize="large" style={{color: "white"}}>close</Icon></Button>
              </Box>
                                          <div className="devport-infomodal-img-ctnr">
                <img src={"http://localhost:3000/images/lwd-image.webp"} alt="" fetchPriority='high' />
              </div>
              </Box>
            )
          
  )
}

export default MixFeaturesModal