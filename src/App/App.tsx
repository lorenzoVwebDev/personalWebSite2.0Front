import { Outlet } from 'react-router';
import {preload} from 'react-dom'
//components
import GlobalFooter  from '@common/Footer/Footer';
import GlobalHeader from '@common/Header/Header'
import './App.scss'

function App() {
  return (
    <>
      <GlobalHeader/>
      <div className="home-component-wrapper">
        <Outlet/>
      </div>
      <GlobalFooter/>
    </>
  )
}

export default App
