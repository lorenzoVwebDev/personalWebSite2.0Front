import React, { useEffect, useState } from 'react';
import SpotifySdkTokenProvider, {tokensObject} from '@context/SpotifySdkProvider';
import { connectSpotifySdk } from '@services/spotifyServices';
import { type SpotifySdkContextType, type TrackType } from '../../../types/types';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
dayjs.extend(utc)
dayjs.extend(timezone)
import useSpotifyAuth from '@hooks/useSpotifyAuth';
import TrackComponent from './TrackComponent/TrackComponent';
import './MusicPortfolio.scss'

type PropTypes = {
  musicProp: string,
  devProp: string,
}

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function MusicPortfolio() {
  //spotify sdk states
  const [device_id, setDevice_id] = useState<string | null>(null)
  const [is_paused, setPaused] = useState(true);
  const [current_track, setTrack] = useState(track);
  //other states
const [token, setToken] = useState<SpotifySdkContextType | null>(tokensObject);
const [tracks, setTracks] = useState<TrackType[]>()
const {access_token} = useSpotifyAuth()


useEffect(() => {

    if (token != null) {

      const spotify_sdk_tokens = localStorage.getItem('spotify_sdk_tokens')
      if (spotify_sdk_tokens) {
        const tokenObj = JSON.parse(spotify_sdk_tokens)
        const timeStamp = tokenObj.timeStamp
        if (timeStamp > (Number(dayjs.utc().unix()) * 1000)) {

          setToken(tokenObj)
          connectSpotifySdk(setDevice_id, setTrack, setPaused, tokenObj)
        }  
        else setToken(null)
      } else {
        setToken(null)
      }
    } else {

      const tokenObj: SpotifySdkContextType = {
        access_token: '',
        refresh_token: '',
        timeStamp: 0,
      }
      const url = new URL(window.location.href)
      const access_token = url.searchParams.get('a')
      const refresh_token = url.searchParams.get('r')
      const expirationTime = url.searchParams.get('exp') 
      const timeStamp = ((dayjs.utc().unix()) * 1000) + (Number(expirationTime) * 1000)

      if (access_token && refresh_token) {
        tokenObj.access_token = access_token;
        tokenObj.refresh_token = refresh_token
        tokenObj.timeStamp = timeStamp
        localStorage.setItem('spotify_sdk_tokens', JSON.stringify(tokenObj))
        setToken(tokenObj)
        connectSpotifySdk(setDevice_id, setTrack, setPaused, tokenObj)
      } 
    }


    const getSong = async () => {
      const portTracks = localStorage.getItem("portTracks")
      if (portTracks) return setTracks(JSON.parse(portTracks))
      const response = await fetch(`${import.meta.env.VITE_S_API_URI}v1/tracks?ids=0b1fxTI4n0h6Suju0sZAp4,5THY1k5gS12tzokNLXxS1k,5yZSoLLUuaNLipqeQb2Tii,1bCa8Ncrv1TKjLObhS9FrO`, {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      })

      if (response.status >= 200 && response.status < 400) {
        const parsedTrack = await response.json()
        for (let i = 0; i < parsedTrack.tracks.length; i++) {
          switch (parsedTrack.tracks[i].name) {
            case ("Flying To Mars"): {
              parsedTrack.tracks[i].type ="produced"
              break
            };
            case "Escape": {
              parsedTrack.tracks[i].type = "produced"
              break
            };
            case "Sei Vento": {
              parsedTrack.tracks[i].type = "produced & recorded (guitars)"
              break
            }
            case "COLD FEET": {
              parsedTrack.tracks[i].type = "recorded (guitars)"
              break
            }
            default:
          }
        }

        localStorage.setItem("portTracks", JSON.stringify(parsedTrack.tracks))

        setTracks(parsedTrack.tracks)
      }
    }

    if (access_token) getSong()
}, [access_token])

return (
  <SpotifySdkTokenProvider 
    contextState={token}
  >
    <h1 className="musicport-title"><span>M</span>usic <span>P</span>ortfolio</h1>
    <div className="musicport-tracks-ctnr">
    {
      tracks && tracks.map((track: TrackType, index: number) => {
        return <TrackComponent
          track={track}
          key={index}
          device_id={device_id}
          token={token}
          is_paused={is_paused}
          trackPlaying={current_track}
        />
      })
    }
    </div>
  </SpotifySdkTokenProvider>
);
}

export default MusicPortfolio
