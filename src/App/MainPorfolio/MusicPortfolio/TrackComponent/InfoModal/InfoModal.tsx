import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { type TrackType } from '@types/types';
import { Button } from '@mui/material';
import NeonButton from '@common/NeonButton/NeonButton';
import { Icon } from '@mui/material';
import './InfoModal.scss'


type PropTypes = {
  modalTrack: TrackType,
  closeModalFunc: (setOpenModal: React.Dispatch<React.SetStateAction<boolean>>) => void,
  setModalTrack: React.Dispatch<any>, 
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

function InfoModal({modalTrack, closeModalFunc, setModalTrack, setOpenModal}: PropTypes) {

  return (
    <Box /* sx={modalStyle} */ className="music-modal-box-ctnr">
      <div className="music-modal-div-ctnr">
      <Typography className="music-modal-typography1">Title: <span>{modalTrack.name}</span></Typography>      
      <Typography className="music-modal-typography1">Artist: <span><a href={modalTrack.artists[0].external_urls.spotify} target="_blank">{modalTrack.artists[0].name}</a></span></Typography>
            <Typography className="music-modal-typography2">My Features: <span><a href={modalTrack.artists[0].external_urls.spotify} target="_blank">{modalTrack.type}</a></span></Typography>
      <NeonButton
        action={window.open}
        actionParameters={modalTrack.artists[0].external_urls.spotify}
        buttonText={`Follow ${modalTrack.artists[0].name}`}
        classString={"btn"}
      ></NeonButton>
      <a href={`${modalTrack.external_urls.spotify}`} target="_blank"><i className="bi bi-arrow-right-short"></i>Listen On Spotify</a>
      <Button onClick={() => {
                closeModalFunc(setOpenModal)
                setModalTrack(null)
      }} size="large" sx={{
        position: "absolute",
        top: -10,
        right: -15
      }} className="music-modal-close-button"><Icon color="action" fontSize="large" className="music-modal-close-button-icon">close</Icon></Button>
        <div className="music-modal-image-ctnr">
          <img src={modalTrack.album.images[0].url} alt="" />
        </div>
      </div>
    </Box>
  )
}

export default InfoModal