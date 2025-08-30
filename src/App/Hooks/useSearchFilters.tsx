import React, { useState } from "react";
//context
import { ProjectsContext } from "@context/ProjectsProvider";
import { type PortObject } from "@types/types";

export enum actionTypes {
  SEARCH,
  APPLY_FILTERS
}  

export type ActionType = {
  type: actionTypes,
  text: string
}



function useSearchFilters(projectsArray: PortObject[]) {
  const [projects, setProjects] = useState<PortObject[]>(projectsArray)
  const totalProjects = projects.length

  const reducer = (projectsArray: PortObject[], action: ActionType): PortObject[] => {
   switch (action.type) {
    case (actionTypes.SEARCH): {
      if (!action.text) return projectsArray;
      let newProjectsArray: PortObject[] = projectsArray.filter(project => {
        return (project.header.toLowerCase().includes(action.text.toLowerCase()) || project.description.toLowerCase().includes(action.text.toLowerCase()))
      })

      return newProjectsArray
      break;
    }
    case (actionTypes.APPLY_FILTERS): {
      if (!action.text) return projectsArray;

      let newProjectsArray: PortObject[] = []

      projectsArray.forEach(project => {
        let bool = false;

        if (project.type === action.text) bool = true


        if (bool) newProjectsArray.push(project)
      })
    
      return newProjectsArray
      break
    }
    default:
      throw new Error('invalid action type')
   } 
}


  return {projects, setProjects, reducer, totalProjects}
}

export default useSearchFilters;
