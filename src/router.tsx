import { createBrowserRouter } from "react-router";
import App from "./App/App";
import HomeComponent from "./App/Home/Home";
import MainPortfolio from "./App/MainPorfolio/MainPortfolio";
import MusicPortfolio from "./App/MainPorfolio/MusicPortfolio/MusicPortfolio";
import DevPortfolio from "./App/MainPorfolio/DevPortfolio/DevPortfolio";
import Contacts from "./App/Contacts/Contacts";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children:  [
      {index: true, Component: HomeComponent}, 
      {
        path: '/portfolio',
        Component: MainPortfolio,
        children: [
          {path: 'musicport', Component: MusicPortfolio},
          {path: 'devport', Component: DevPortfolio},
        ]
      }, {
        path: '/contacts',
        Component: Contacts
      }
    ]
  }
])

export default router