import { useContext } from 'react'
import { ProjectsContext } from '../Context/ProjectsProvider'
import HomePresentation from './HomePresentation/HomePresentation'
import JobsCarousel from './JobsCarousel/JobsCarousel'
import ProjectsSection from './ProjectsSection/ProjectsSection'
import arrays from "http://localhost:3000/scripts/arrays"
import './Home.scss'


function Home() {
  const projects = useContext(ProjectsContext)
//first commit
  return (
    <div className="home-container">
      <HomePresentation/>
      <JobsCarousel
        jobsDone={arrays.jobsDone}
      />
      <ProjectsSection 
        portGallery={projects}
      />
    </div>
  )
}

export default Home
