import React, {useEffect, useState, Suspense} from "react";
import NeonButton from "@common/NeonButton/NeonButton";
import { type TrackType, type SpotifySdkContextType } from "../../../../types/types";
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
                
               } >
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
               }} >
                Pause
              </button>
              
            }
            <a href={`${track.uri}`}><i className="bi bi-arrow-right-short"></i>Listen On Spotify</a>
            </div>
            : <a href="http://localhost:3000/spotify/auth/login">Login</a>}
        </div>
        <div className="track-img-ctnr">
          <img src={track.album.images[0].url}/>
        </div>
      </div> 
              
  )
}

export default TrackComponent;