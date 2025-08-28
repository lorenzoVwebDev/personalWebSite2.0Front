import { useContext, lazy, Suspense } from 'react'
import { ProjectsContext } from '../Context/ProjectsProvider'
import HomePresentation from './HomePresentation/HomePresentation'
import JobsCarousel from './JobsCarousel/JobsCarousel'
import {BlinkBlur} from 'react-loading-indicators'
/* import ProjectsSection from './ProjectsSection/ProjectsSection' */
import arrays from "http://localhost:3000/scripts/arrays"
import './Home.scss'

const ProjectsSection = lazy(() => import('./ProjectsSection/ProjectsSection')) 

function Home() {
  const projects = useContext(ProjectsContext)

//first commit
  return (
    <div className="home-container">
      <HomePresentation/>
      <JobsCarousel
        jobsDone={arrays.jobsDone}
      />
      {projects.length > 0 ?
        <Suspense fallback={<div style={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '15rem',
            backgroundColor: '#292e33'
          }
        }><BlinkBlur color="#12f7ff" size="large" text="Loading" textColor="#12f7ff" /></div>}>
          <ProjectsSection 
            portGallery={projects}
          />
        </Suspense> : <div style={
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '15rem',
            backgroundColor: '#292e33'
          }
        }><BlinkBlur color="#12f7ff" size="large" text="Loading" textColor="#12f7ff" /></div>
      }
    </div>
  )
}

export default Home
