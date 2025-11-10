import type React from "react";
import { redirect } from "react-router";
import { type PortObject } from "../../../types/types";
import { createBlobObject } from "../../utils/blobParsing";
import NeonButton from "../NeonButton/NeonButton";
import './ProjectComponent.scss'
//react icons
import { FaReact, FaAngular, FaNode, FaPhp, FaHtml5  } from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";

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
            <div>
            <h1>{project.header}</h1>
              <div className="project-dev-icon-ctnr">
              {project.type === "node" ? 
                <FaNode 
                  className="project-dev-icon"
                /> : project.type === "excelpowerpoint" ? <BsMicrosoft 
                  className="project-dev-icon"
                /> : project.type === "php" ? <FaPhp
                className="project-dev-icon"
                /> : project.type === "projects" ? <FaHtml5 
                  className="project-dev-icon"
                /> : project.type === "reactprojects" ?  <FaReact 
                  className="project-dev-icon"
                />: project.type === "angular" ? <FaAngular 
                  className="project-dev-icon"
                /> : ""}
              </div>
            </div>
            <NeonButton
              action={window.open}
              actionParameters={project.href}
              buttonText={'Go To Project'}
              classString={'devport-project-component-button'}
            />
        </div>
        <div className="project-img-ctnr">
            <img src={blobObject} alt={`${project.header}`}/>
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
          <img src={blobObject} alt={`${project.header}`}/>
        </div>
      </div>               
      ) 
    }
  }
}

export default ProjectComponent;