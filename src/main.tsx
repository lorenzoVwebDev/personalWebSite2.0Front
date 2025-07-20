import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
//components
import { Header as GlobalHeader } from './App/common/index.tsx'
import {Footer as GlobalFooter} from './App/common/index.tsx'
import router from './router.tsx'
import './main.scss'


createRoot(document.getElementById('root')!).render(
        <RouterProvider router={router}/>
)
