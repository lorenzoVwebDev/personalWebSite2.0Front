import { Outlet } from 'react-router'
import './MainPortfolio.scss'
import DevPortfolio from './DevPortfolio/DevPortfolio'
import MusicPortfolio from './MusicPortfolio/MusicPortfolio'

function MainPortfolio() {
  const contextValue = {
    musicProp: 'MusicComponent',
    devProp: 'DevComponent',
  }
  return (
    <>
    MainPortfolio Component
    <Outlet context={contextValue}/>
    </>
  )
}

export default MainPortfolio
