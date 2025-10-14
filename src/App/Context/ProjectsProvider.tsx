import React, {useEffect, createContext, useState} from 'react';
import { type PortObject} from '@types/types';
//indexDB
import localForage from "localforage";

type PortGalleryType = PortObject[]



const initContext: PortGalleryType = []
type ChildrenType = {
  children?: React.ReactElement
}

export const ProjectsContext = createContext<PortGalleryType>(initContext);

const ProjectsProvider = ({children}: ChildrenType) => {
  const [projects, setProjects] = useState(initContext)

  useEffect(() => {
    async function fetchProjects() {
      const projectJson: string | null = await localForage.getItem('projectsJson');
      if (projectJson != null) {
        const parsedProjectJson = JSON.parse(projectJson);
        if (parsedProjectJson.length > 0) return setProjects(parsedProjectJson)
      } else {
      const response = await fetch(`${import.meta.env.VITE_DEV_API}upload/project`)
      if (response.status >= 200 && response.status < 400) {
        const json = await response.json()
        const data = JSON.stringify(json)
        localForage.setItem('projectsJson', data)
        setProjects(json)
      } else {
        console.error(response)
      }
      }
    }
    fetchProjects()

    return () => {}
  }, [])

  return (
    <ProjectsContext value={projects}>
      {children}
    </ProjectsContext>
  )
}

export default ProjectsProvider;