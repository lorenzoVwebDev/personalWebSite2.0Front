import { useContext, useRef, useEffect, useState } from 'react'
import { useOutletContext} from 'react-router'
import { ProjectsContext } from '@context/ProjectsProvider'
import './DevPortfolio.scss'
import useSearchFilters from '@hooks/useSearchFilters'
//component
import ProjectComponent from '@common/ProjectComponent/ProjectComponent'
import { Pagination } from '@mui/material';
import { Modal } from '@mui/material';
import { Icon } from '@mui/material';
import InfoModal from './InfoModal/InfoModal'
import SearchForm from './SearchForm/SearchForm'
//utils&types
import { setPageContent } from '../../utils/searchPaginationUtils'
import { type PortObject, type OutletContextType } from '@types/types'


function DevPortfolio() {
  //Hooks
  const [page, setPage] = useState(1);
  const [modalProject, setModalProject] = useState<PortObject | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [totalPagesState, setTotalPages] = useState<number | undefined>(undefined)
  const [isProjectsArray, setIsprojectsArray] = useState<boolean>(false)
  const searchBarRef = useRef(null)
  const optionFiltersRef = useRef(null)
  const {devPath} = useOutletContext<OutletContextType>()
  const portGallery: PortObject[] = useContext(ProjectsContext)
  const {projects, setProjects, reducer} = useSearchFilters(portGallery)
  //variables
  let itemsPerPage = 10;
  let totalPages = Math.ceil(portGallery.length / itemsPerPage);
  //useEffect
  useEffect(() => {
    if (!isProjectsArray && projects.length > 0) setIsprojectsArray(true)
    let pages = Math.ceil(projects.length / itemsPerPage);
    setTotalPages(pages)

  }, [portGallery, projects])
  //Function

  const handleChange = (event, value) => {
    setPage(value)
  }

  const openModalFunc = (setOpenModal: React.Dispatch<React.SetStateAction<boolean>>) => {
    setOpenModal(true)
  }

//Jsx
  return (
    <section className="webport-section">
      <SearchForm
        setProjects={setProjects}
        reducer={reducer}
        portGallery={portGallery}
        searchBarRef={searchBarRef}
        optionFiltersRef={optionFiltersRef}
      />
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
            >
            <button onClick={() => {
              openModalFunc(setOpenModal)
              setModalProject(project)
            }} className="devport-neon-button">More Info<Icon>open_in_new</Icon></button>
            </ProjectComponent>
          </div>
        )
      })     
      :
      setPageContent(page, portGallery, itemsPerPage).map((project: PortObject, index: number) => {
        return (
          <div className="devport-project-ctnr" key={index}>
            <ProjectComponent
              project={project}
              index={index}
              parentComponent={'DevPortfolio'}
              routePath={devPath}
            >
            <button onClick={() => {
              openModalFunc(setOpenModal)
              setModalProject(project)
            }} className="devport-neon-button">More Info<Icon sx={
              {
                fontSize: 'calc(1vw+1vh)'
              }
            }>open_in_new</Icon></button>
            </ProjectComponent>
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
      color: "white",          
    },
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "white",
      color: "black",          
    },
    "& .MuiPaginationItem-root:hover": {
      backgroundColor: "rgba(255,255,255,0.2)", 
    }, 
  }}
      />
      </section>
      <Modal
        open={openModal}
        aria-labelledby="project-info"
      ><InfoModal
        modalProject={modalProject}
        setModalProject={setModalProject}
        setOpenModal={setOpenModal}
      />
      </Modal>
    </section>
  )
}

export default DevPortfolio
