import NeonButton from '@common/NeonButton/NeonButton'
import SubmitNeonButton from '@common/SubmitNeonButton/SubmitNeonButton'
import { type PortObject } from '../../../../types/types'
import { actionTypes, type ActionType } from '@hooks/useSearchFilters'
import { resetProjects } from '@utils/searchPaginationUtils'
import { changeDisplay, labelComicStyle } from '@utils/styleUtils'
import './SearchForm.scss'

type PropTypes = {
  setProjects:  React.Dispatch<React.SetStateAction<PortObject[]>>, 
  reducer: (projectsArray: PortObject[], action: ActionType) => PortObject[], 
  portGallery: PortObject[], 
  searchBarRef:  React.RefObject<null>, 
  optionFiltersRef: React.RefObject<null>
}

function SearchForm({setProjects, reducer, portGallery, searchBarRef, optionFiltersRef}: PropTypes) {
  const OptionsArray = ['php', 'reactprojects', 'projects', 'node', 'excelpowerpoint', 'angular']
  
  return (      <div className="webport-form-ctnr">
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
            <button type="submit" aria-label='Search Project' aria-hidden="false" id="search-button" onMouseOver={(e) => {
                changeDisplay('block', 'search-button');
              } } onMouseOut={() => {
                changeDisplay('none', 'search-button');
              }} style={{
                position: "relative"
              }}><label htmlFor="search-button" style={labelComicStyle("top", 50)}>Search Project</label><i className="bi bi-search"></i></button>
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
        </div>)
}

export default SearchForm