import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import ProjectsProvider from './App/Context/ProjectsProvider.tsx'
import SpotifyAuthProvider from './App/Context/SpotifyAuthProvider.tsx'
//components
import { Header as GlobalHeader } from './App/common/index.tsx'
import {Footer as GlobalFooter} from './App/common/index.tsx'
import router from './router.tsx'
import './main.scss'
//

createRoot(document.getElementById('root')!).render(
 <SpotifyAuthProvider>
  <ProjectsProvider>
   <RouterProvider router={router}/>
  </ProjectsProvider>
 </SpotifyAuthProvider>
)
