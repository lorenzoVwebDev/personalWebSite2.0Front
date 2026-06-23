import { createBrowserRouter } from "react-router";
import App from "./App/App";
import HomeComponent from "./App/Home/Home";
import MainPortfolio from "./App/MainPorfolio/MainPortfolio";
import MusicPortfolio from "./App/MainPorfolio/MusicPortfolio/MusicPortfolio";
import DevPortfolio from "./App/MainPorfolio/DevPortfolio/DevPortfolio";
import Contacts from "./App/Contacts/Contacts";
import AboutMe from "./App/AboutMe/AboutMe";
import SignIn from "./App/common/Authentication/SignIn/SignIn";
import SignUp from "./App/common/Authentication/SignUp/SignUp";
import { ErrorBoundary } from "./ErrorBoundary";

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    ErrorBoundary: ErrorBoundary,
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
      }, {
        path: '/aboutme',
        Component: AboutMe
      }, {
        path: '/authentication',
        children: [
          {path: 'signin', Component: SignIn},
          {path: 'signup', Component: SignUp}
        ]
      }
      
    ]
  }
])

export default router