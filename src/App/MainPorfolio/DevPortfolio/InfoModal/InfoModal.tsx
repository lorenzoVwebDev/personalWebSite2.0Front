import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import NeonButton from '../../../common/NeonButton/NeonButton';
import { type PortObject } from '../../../../types/types';
import './InfoModal.scss'
//utils
import { createBlobObject } from '../../../utils/blobParsing';
//react-icons
import { FaReact, FaAngular, FaNode, FaPhp, FaHtml5  } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";

type PropTypes = {
  modalProject: PortObject | null,
  setModalProject: React.Dispatch<any>,
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

function InfoModal({modalProject, setModalProject, setOpenModal}: PropTypes) {
  const closeModalFunc = (setOpenModal: React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpenModal(false)
  }
  const image = createBlobObject(modalProject?.image64)
  
  const type = modalProject?.type
  return (
/*           {type === "node" ? "bi bi-filetype-json" : type === "excelpowerpoint" ? "bi bi-microsoft" : type === "php" ? "bi bi-filetype-php" : type === "projects" ? "bi bi-javascript" : type === "reactprojects" ? "bi bi-filetype-jsx" : type === "angular" ? "bi bi-google" : ""} */
            modalProject != null && (
              <Box className="devport-infomodal-ctnr-total">
              <Box className="devport-infomodal-ctnr">
              <Typography className="devport-infomodal-header">{modalProject.header}</Typography>
              <div className="devport-infomodal-icon-ctnr">
              {type === "node" ? 
                <FaNode 
                  className="devport-infomodal-icon"
                /> : type === "excelpowerpoint" ? <BsMicrosoft 
                  className="devport-infomodal-icon"
                /> : type === "php" ? <FaPhp
                className="devport-infomodal-icon"
                /> : type === "projects" ? <FaHtml5 
                  className="devport-infomodal-icon"
                /> : type === "reactprojects" ?  <FaReact 
                  className="devport-infomodal-icon"
                />: type === "angular" ? <FaAngular 
                  className="devport-infomodal-icon"
                /> : ""}
              </div>
              <Typography className="devport-infomodal-description">{modalProject.description}</Typography>
              
              <NeonButton
                action={window.open}
                actionParameters={modalProject.href}
                buttonText={'Go To Project'}
                classString={'btn'}
                style={{
                 width: '15rem',
                 height: '3rem',
                }}
              />
              <Button onClick={() => {
                closeModalFunc(setOpenModal)
                setModalProject(null)
              }} size="large" sx={{
                position: "absolute",
                top: -10,
                right: -15
              }}><Icon color="action" fontSize="large" style={{color: "white"}}>close</Icon></Button>
              </Box>
                                          <div className="devport-infomodal-img-ctnr">
                <img src={image} alt="" fetchPriority='high' />
              </div>
              </Box>
            )
          
  )

}

export default InfoModal