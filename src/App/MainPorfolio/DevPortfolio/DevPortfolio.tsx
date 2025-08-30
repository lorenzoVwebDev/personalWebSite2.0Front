import { useContext, useRef, useEffect, useState } from 'react'
import { Link, useOutletContext, useLocation} from 'react-router'
import { ProjectsContext } from '@context/ProjectsProvider'
import './DevPortfolio.scss'
import useSearchFilters, {actionTypes, type ActionType} from '@hooks/useSearchFilters'
//component
import ProjectComponent from '@common/ProjectComponent/ProjectComponent'
import SubmitNeonButton from '@common/SubmitNeonButton/SubmitNeonButton'
import NeonButton from '@common/NeonButton/NeonButton'
import { Box, Pagination, Typography } from '@mui/material';

//utils
import { splitPathCreator } from '@utils/routingFunctions'
import { type OutletContextType, type PortObject } from '@types/types'

function DevPortfolio() {
  const [page, setPage] = useState(1);
  const [totalPagesState, setTotalPages] = useState<number | undefined>(undefined)
  const [isProjectsArray, setIsprojectsArray] = useState<boolean>(false)
  const searchBarRef = useRef(null)
  const optionFiltersRef = useRef(null)
  const {devPath} = useOutletContext<OutletContextType>()
  const OptionsArray = ['php', 'reactprojects', 'projects', 'node', 'excelpowerpoint', 'angular']
  const portGallery: PortObject[] = useContext(ProjectsContext)
  const {projects, setProjects, reducer} = useSearchFilters(portGallery)
  let itemsPerPage = 10;
  let totalPages = Math.ceil(portGallery.length / itemsPerPage);

  useEffect(() => {
    if (!isProjectsArray) setIsprojectsArray(true)
    let pages = Math.ceil(projects.length / itemsPerPage);
    setTotalPages(pages)
  }, [projects])

  const resetProjects = ({
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

  const handleChange = (event, value) => {
    setPage(value)
  }

  const setPageContent = (page: number, projectsArray: PortObject[], itemsPerPage: number) => {
    const pageIndex = page - 1;
    const tasksStartingIndex = pageIndex === 0 ? 0 : pageIndex * itemsPerPage;
    const tasksEndingIndex = tasksStartingIndex + itemsPerPage;
    const copiedProjects = Object.create(projectsArray)
    const tasks = copiedProjects.splice(tasksStartingIndex, tasksEndingIndex);
    return tasks
  }
//
  return (
    <section className="webport-section">
      <div className="webport-form-ctnr">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
        <form onSubmit={(e) => {
            e.preventDefault()
            const searchBarInput = e.target.children[0].value 
            setProjects(reducer(portGallery, {
              type: actionTypes.SEARCH, 
              text: searchBarInput
            }))
          }} className="webport-searchbar" id="webport-searchbar">
          <input type="text" name="search bar" placeholder='Search Project' ref={searchBarRef}/>
          <button type="submit"><i className="bi bi-search"></i></button>
        </form>
        <NeonButton
          action={resetProjects}
          actionParameters={{
           searchBarRef,
           optionFiltersRef,
           setProjects,
           reducer,
           portGallery,
           actionTypes
          }}
          classString={'btn3'}
          buttonText={'Reset Flters'}
        />
        </div>
        <h1><span>W</span>eb <span>D</span>ev <span>P</span>rojects</h1>
        <div className="webport-filters-ctnr">
          <label htmlFor="filters-form"><span>F</span>ilters</label>
          <form onSubmit={(e) => {
            e.preventDefault()
            const optionContent = e.target.children[1].value
            if (optionContent != 'Choose Type') {
              setProjects(reducer(portGallery, {
                type: actionTypes.APPLY_FILTERS, 
                text: optionContent
              }))
            }
          }} id="filters-form">
            <label htmlFor="project-type"><span>S</span>elect <span>P</span>roject <span>T</span>ype</label>
            <select name="project-type" id="project-type" ref={optionFiltersRef}>
              <option selected disabled>Choose Type</option>
              {
                OptionsArray.map((option, index) => {
                  return <option value={option} key={index}>{option}</option>
                })

              }
            </select>
            <SubmitNeonButton
            buttonText={'Apply Filters'}
            classString={'btn'} 
            />
          </form>
        </div>
      </div>
      <section className="devport-projects-section">
      <div className="devport-projects-ctnr">
      {isProjectsArray ? 
      setPageContent(page, projects, itemsPerPage).map((project: PortObject, index: number) => {
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
      :
      setPageContent(page, portGallery, itemsPerPage).map((project, index) => {
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
      <Pagination
        count={!totalPagesState ? totalPages : totalPagesState}
        page={page}
        onChange={handleChange}
        sx={{
    "& .MuiPaginationItem-root": {
      color: "white",          // text color
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "white", // background for selected
      color: "black",           // selected text color (so it’s visible)
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "rgba(255,255,255,0.2)", // hover effect
    },
  }}
      />
      </section>
    </section>
  )
}

export default DevPortfolio
