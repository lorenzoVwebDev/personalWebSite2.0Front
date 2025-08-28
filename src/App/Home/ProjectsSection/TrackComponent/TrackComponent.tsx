import type React from "react";
import { type TrackType } from "../../../../types/types";
import './TrackComponent.scss'

type PropTypes = {
  track: TrackType,
  index: number
}

function TrackComponent({track, index}: PropTypes): React.ReactElement {

  return (
        <div className="track" key={index} >
        <div className="track-about-ctnr">
            <h1>{track.name}</h1>
        </div>
        <div className="track-img-ctnr">
          <img src={track.album.images[0].url}/>
        </div>
      </div> 
              
  )
}

export default TrackComponent;