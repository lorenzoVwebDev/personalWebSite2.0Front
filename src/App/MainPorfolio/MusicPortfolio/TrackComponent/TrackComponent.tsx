import React, {useEffect, useState} from "react";
import { type TrackType, type SpotifySdkContextType } from "../../../../types/types";
import { Modal } from "@mui/material";
import { Icon } from '@mui/material';
import InfoModal from "./InfoModal/InfoModal";
import './TrackComponent.scss'

type PropTypes = {
  track: TrackType,
  device_id: string | null,
  token: SpotifySdkContextType | null,
  is_paused: any,
  trackPlaying: any
}

function TrackComponent({track, device_id, token, is_paused, trackPlaying}: PropTypes): React.ReactElement {
  const [isActiveTrack, setIsActiveTrack] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [modalTrack, setModalTrack] = useState<any>(null)

  useEffect(() => {

    if (trackPlaying.uri === track.uri && !is_paused) {
      setIsActiveTrack(true)
    }
    else setIsActiveTrack(false)
  }, [trackPlaying])

  const playTraskJson = JSON.stringify({
                      "uris": [`${track.uri}`],
                      "offset": {
                          "position": 0
                      },
                      "position_ms": 0
                    })

  const openModalFunc = (setOpenModal:  React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpenModal(true)
  }
  
  const closeModalFunc = (setOpenModal:  React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpenModal(false)
  }
  return (
        <div className="track-port" >
        <div className="track-about-ctnr">
          <div className="h-ctnr">
            <h1>{track.name}</h1>

          </div>
            {token != null ? 
            <div className="playback-controls">
              <h2>{track.type}</h2>
              {
              !isActiveTrack ? 
              <button className="btn-spotify" onClick={async () => { 
                await fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
                    method: "PUT",
                    body: playTraskJson,
                    headers: {
                      "Authorization": `Bearer ${token.access_token}`
                    }
                  })
               }
                
               } style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem"
               }}><i className="bi bi-play-circle-fill"></i>
                Play
              </button>
               : 
              <button className="btn-spotify2" onClick={async () => { 
                await fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`, {
                  method: "PUT",
                  body: playTraskJson,
                  headers: {
                    "Authorization": `Bearer ${token.access_token}`,
                    "Content-Type": 'application/json'
                  }
                }).then(res => {
                  if (res.ok) setIsActiveTrack(false)
                }) 
               }} style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.2rem"
               }}><i className="bi bi-pause-circle"></i>
                Pause
              </button>
              
            }
            </div>
            : <a href="http://localhost:3000/spotify/auth/login" className="track-login-href">Spotify Login</a>}
            <div className="devport-neon-button-ctnr">
            <button onClick={() => {
              openModalFunc(setOpenModal)
              setModalTrack(track)
            }} className="devport-neon-button">More Info<Icon sx={
              {
                fontSize: 'calc(1vw+1vh)'
              }
            }>open_in_new</Icon></button>
            </div>
        </div>
        <div className="track-img-ctnr">
          <img src={track.album.images[0].url}/>
        </div>
        <Modal
          open={openModal}
          aria-labelledby="track-info"
        >
          <InfoModal
            closeModalFunc={closeModalFunc}
            setModalTrack={setModalTrack}
            setOpenModal={setOpenModal}
            modalTrack={modalTrack}
          />
        </Modal>
      </div> 
              
  )
}

export default TrackComponent;