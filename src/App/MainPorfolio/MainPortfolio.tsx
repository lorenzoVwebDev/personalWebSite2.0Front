import { Outlet, createPath, Link, useLocation, useNavigate } from 'react-router'
import './MainPortfolio.scss'
//component
import DevPortfolio from './DevPortfolio/DevPortfolio'
import MusicPortfolio from './MusicPortfolio/MusicPortfolio'
import BackLinksComponent from '@common/BacklinksComponent/BacklinksComponent'
import { splitPathCreator } from '@utils/routingFunctions'
import { type OutletContextType } from '@types/types'

function MainPortfolio() {
  const navigate = useNavigate()
  const location = useLocation()
  let path = location.pathname
  if (location.pathname.endsWith('/')) {
    path = location.pathname.slice(0, location.pathname.length-1)
  }

  path = splitPathCreator(path)

  console.log(path)

  const musicPath = createPath({
    hash: '',
    pathname: '/portfolio/musicport',
    search: ''
  })

  const devPath = createPath({
    hash: '',
    pathname: '/portfolio/devport',
    search: ''
  })
  
  const contextValue: OutletContextType = {
    musicPath: musicPath,
    devPath: devPath,
  }

  const portLinks = (
    <div className="mainport-portlinks-container">
      <h1><span>D</span>ev <span>P</span>ortfolio | <span>M</span>usic <span>P</span>ortfolio</h1>
      <div className="port-link-container" onClick={() => navigate(devPath)}>
        <img className="port-link-image" src='https://www.musaformazione.it/wp-content/uploads/2019/11/sviluppatore-web.jpg' alt="web-development.png" />
        <div className="port-link-modulator"></div>
        <h1>Dev Portfolio</h1>
      </div>
      <div className="port-link-container" onClick={() => navigate(musicPath)}>
        <img className="port-link-image" src="https://bigcreative.education/wp-content/uploads/2023/04/caught-in-joy-ptVBlniJi50-unsplash-1-2048x1365.jpg.webp" alt="music-production.png" />
        <div className="port-link-modulator"></div>
        <h1>Music Portfolio</h1>
      </div>
    </div>
  )

  return (
    <section className="mainport-ctnr">
      <div className="mainport-background-image-ctnr">
        <img src={`${import.meta.env.VITE_DEV_API}images/mainport-background.png`} alt="mainport-background.png" fetchPriority='high' className="mainport-background-image"/>  
      </div>
    <BackLinksComponent
      backlickArray={path}
    />
    {path[path.length - 1] === 'portfolio' ? portLinks : <Outlet context={contextValue satisfies OutletContextType}/>}
{/*      */}
    </section>
  )
}

export default MainPortfolio
