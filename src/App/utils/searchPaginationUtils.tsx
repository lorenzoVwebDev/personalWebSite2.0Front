  import { type PortObject } from "../../types/types"
  import {actionTypes, type ActionType } from "../Hooks/useSearchFilters"
  
  export const resetProjects = ({
    searchBarRef, 
    optionFiltersRef, 
    setProjects, 
    reducer, 
    portGallery, 
    actionTypes}: {
      searchBarRef:  React.RefObject<HTMLInputElement | null>,
      optionFiltersRef: React.RefObject<HTMLSelectElement | null>,
      setProjects:  React.Dispatch<React.SetStateAction<PortObject[]>>,
      reducer: (projectsArray: PortObject[], action: ActionType) => PortObject[],
      portGallery: PortObject[],
      actionTypes: actionTypes
    }) => {
      setProjects(reducer(portGallery, {
        type: actionTypes.SEARCH, 
        text: ''
      }))
      if (optionFiltersRef.current) optionFiltersRef.current.selectedIndex = 0 
      if (searchBarRef.current) searchBarRef.current.value = ''
  }

  export const setPageContent = (page: number, projectsArray: PortObject[], itemsPerPage: number) => {
      const pageIndex = page - 1;
      const tasksStartingIndex = pageIndex === 0 ? 0 : pageIndex * itemsPerPage;
      const tasksEndingIndex = tasksStartingIndex + itemsPerPage;
      const copiedProjects = Object.create(projectsArray)
      const tasks = copiedProjects.splice(tasksStartingIndex, tasksEndingIndex);
      return tasks
    }