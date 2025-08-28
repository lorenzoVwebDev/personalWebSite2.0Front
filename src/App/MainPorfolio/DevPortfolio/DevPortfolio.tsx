import { useContext, useRef, useEffect, useState } from 'react'
import { Link, useOutletContext, useLocation} from 'react-router'
import { ProjectsContext } from '../../Context/ProjectsProvider'
import './DevPortfolio.scss'
//component
import ProjectComponent from '@common/ProjectComponent/ProjectComponent'
import BackLinksComponent from '@common/BacklinksComponent/BacklinksComponent'
//utils
import { splitPathCreator } from '@utils/routingFunctions'
import { type OutletContextType } from '@types/types'

function DevPortfolio() {
 const {devPath} = useOutletContext<OutletContextType>()
 const backlickArray: string[] = splitPathCreator(devPath)
 const portGallery = useContext(ProjectsContext)
  

  return (

    <div>
      {
      portGallery.map((project, index) => {
        return (
          <div className="devport-project-ctnr" key={index}>
            <ProjectComponent
              project={project}
              index={index}
              parentComponent={'DevPortfolio'}
              routePath={devPath}
            />
          </div>
        )
      })
      }
    </div>
  )
}

export default DevPortfolio
