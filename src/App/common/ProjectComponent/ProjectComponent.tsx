import { type PortObject } from "../../../types/types";
import { createBlobObject } from "../../utils/blobParsing";
import './ProjectComponent.scss'

type PropTypes = {
  project: PortObject,
  index: number,
  parentComponent?: string
}

function ProjectComponent({project, index, parentComponent}: PropTypes) {
  const blobObject = createBlobObject(project.image64)

  switch (parentComponent) {
    case 'DevPortfolio':
    return (
        <div className="project" key={index}>
        <div className="project-about-ctnr">
            <h1>{project.header}</h1>
        </div>
        <div className="project-img-ctnr">
          <img src={blobObject}/>
        </div>
      </div>               
      )
    break
    default: {
          return (
        <div className="project" key={index}>
        <div className="project-about-ctnr">
            <h1>{project.header}</h1>
        </div>
        <div className="project-img-ctnr">
          <img src={blobObject}/>
        </div>
      </div>               
      ) 
    }
  }
}

export default ProjectComponent;