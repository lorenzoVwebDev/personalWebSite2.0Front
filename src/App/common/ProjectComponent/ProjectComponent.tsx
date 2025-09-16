import type React from "react";
import { redirect } from "react-router";
import { type PortObject } from "../../../types/types";
import { createBlobObject } from "../../utils/blobParsing";
import NeonButton from "../NeonButton/NeonButton";
import './ProjectComponent.scss'
//
type PropTypes = {
  project: PortObject,
  index: number,
  parentComponent?: string,
  children?: React.ReactElement
}

function ProjectComponent({project, index, parentComponent, children}: PropTypes) {
  const blobObject = createBlobObject(project.image64)
  redirect(project.href)
  switch (parentComponent) {
    case 'DevPortfolio':
    return (
        <div className="project-dev" key={index}>
        <div className="project-about-ctnr">
            {children && children}
            <h1>{project.header}</h1>
            <p>{project.description}</p>
            <NeonButton
              action={window.open}
              actionParameters={project.href}
              buttonText={'Go To Project'}
              classString={'btn'}
              style={{
                width: '15rem',
                height: '3rem',
              }}
            />
        </div>
        <div className="project-img-ctnr">
            <img src={blobObject}/>
        </div>
        <div className="modulator"></div>
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