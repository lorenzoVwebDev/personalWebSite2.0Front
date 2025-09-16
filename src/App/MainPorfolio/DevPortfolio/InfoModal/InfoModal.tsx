import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Icon } from '@mui/material';
import NeonButton from '../../../common/NeonButton/NeonButton';
import { type PortObject } from '../../../../types/types';
import './InfoModal.scss'
//utils
import { createBlobObject } from '../../../utils/blobParsing';
const modalStyle = {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          minHeight: 400,
          backgroundColor: "white",
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          borderRadius: "15px",
          p: 4,
        }
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

  return (
          
            modalProject != null && (
              <Box className="devport-infomodal-ctnr-total">
              <Box className="devport-infomodal-ctnr">
              <Typography className="devport-infomodal-header">{modalProject.header}</Typography>
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