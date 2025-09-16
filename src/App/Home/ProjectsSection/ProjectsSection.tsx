import {useEffect, useState} from 'react'
import Carousel from 'react-multi-carousel';
import useSpotifyAuth from '@hooks/useSpotifyAuth';
//components
import TrackComponent from './TrackComponent/TrackComponent';
import NeonButton from '@common/NeonButton/NeonButton';
import { useNavigate } from 'react-router';
import './ProjectsSection.scss'
import { type PortObject, type TrackType } from '@types/types';
//utils
import { createBlobObject } from '../../utils/blobParsing';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

type PropTypes = {
  portGallery: PortObject[]
}

function ProjectsSection({portGallery}: PropTypes) {
  const {access_token} = useSpotifyAuth()
  const [track, setTrack] = useState<TrackType[]>()
  const navigate = useNavigate()

  useEffect(() => {
    const getSong = async () => {
      const response = await fetch(`${import.meta.env.VITE_S_API_URI}v1/tracks?ids=0b1fxTI4n0h6Suju0sZAp4,5THY1k5gS12tzokNLXxS1k,5yZSoLLUuaNLipqeQb2Tii,1bCa8Ncrv1TKjLObhS9FrO`, {
        headers: {
          "Authorization": `Bearer ${access_token}`
        }
      })

      if (response.status >= 200 && response.status < 400) {
        const parsedTrack = await response.json()
        setTrack(parsedTrack.tracks)
      }
    }

    if (access_token) getSong()
  }, [access_token])

  return (
    <section className='home-projects-section'>
      <div className="modulator"></div>
      <div className="project-section-ctnr">
      <h1 className="project-section-ctnr-header"><span>D</span>ev <span>P</span>ortfolio</h1>
      <NeonButton 
        action={navigate}
        actionParameters={'/portfolio/devport'}
        classString={'btn3'}
      >
        <h1>Go to Web Projects</h1>
      </NeonButton>
      </div>
      {portGallery &&
      <Carousel
        responsive={responsive}
        infinite={true} 
      >
        {portGallery.map((project, index) => {

        const blobObject = createBlobObject(project.image64)
        return (
        <div className="job" key={index} >
        <div className="job-about-ctnr">
            <h1>{project.header}</h1>
        </div>

        <div className="job-img-ctnr">
            {blobObject && <img src={blobObject} alt={project.description}/>}
        </div>
      </div> 
        )
      })}
      </Carousel>
      }
      <div className="project-section-ctnr">
      <h1 className="project-section-ctnr-header"><span>M</span>usic <span>P</span>ortfolio</h1>
      <NeonButton 
        action={navigate}
        actionParameters={'/portfolio/musicport'}
        classString={'btn3'}
      >
        <h1>Go to <span>P</span>roduced <span>S</span>ong</h1>
      </NeonButton>
      </div>
      {track && 
      <Carousel 
        responsive={responsive}
        infinite={true} 
      >
        {track.map((song, index) => {
          return <TrackComponent
            track={song}
            index={index}
          />
        })
        }
      </Carousel>
      }
    </section>
  )
}

export default ProjectsSection;