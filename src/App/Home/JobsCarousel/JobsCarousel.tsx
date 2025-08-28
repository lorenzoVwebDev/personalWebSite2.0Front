import React from 'react';
import Carousel from 'react-multi-carousel';
import { useNavigate } from 'react-router';
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { type JobsObject } from '@types/types';
//components
import NeonButton from '@common/NeonButton/NeonButton';
import 'react-multi-carousel/lib/styles.css';
import './JobsCarousel.scss'

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
  jobsDone: JobsObject[]
}


function JobsCarousel({jobsDone}: PropTypes) {
  let navigate = useNavigate();
  const [ref, entry] = useIntersectionObserver({
    threshold: 0,
    root: null,
    rootMargin: "0px",
  })


  return (
    <section className='home-carousel-section' ref={ref}> { 
      entry?.isIntersecting && <Carousel 
      responsive={responsive}
      className="home-carousel"
    >
      {
        jobsDone.map((job: JobsObject, index: number) => {
          return (
        <div id={job.id} className="job" key={index} >
        <div className="job-about-ctnr">
            <h1>{job.name}</h1>
            <p><i className={`bi bi-${job.icon}`} style={{
              fontSize: "2.3rem"
            }}></i></p>
            <p>
              {job.slightDescription}
            </p>
            <br />
            <NeonButton
              action={navigate}
              actionParameters={'/aboutme'}
              buttonText={'Read More'}
              classString={'btn'}
            />
        </div>

        <div className="job-img-ctnr">
          <img src={`${import.meta.env.VITE_DEV_API}images/jobs/${job.image}`} alt=""/>
        </div>
      </div> 
      )
        })
      }
    </Carousel>

    }

    </section>
  )
}

export default JobsCarousel;