import { Link } from "react-router"
import { createBacklinkArray } from "@utils/routingFunctions"
import './BacklinksComponent.scss';

type PropTypes = {
  backlickArray: string[]
}
function BackLinksComponent({backlickArray}: PropTypes) {
  const backLinks = createBacklinkArray(backlickArray).map((backLink: string, index: number) => {
    
    if (!(index === backlickArray.length - 1) && index != 0) {
      const backlinkStringArray = backLink.split('/')

      return (
        <div key={index} className="backlink-container"> 
          <Link to={backLink}>{backlinkStringArray[backlinkStringArray.length - 1].trim()}</Link>
          <i className={`bi bi-arrow-right`} style={{
                fontSize: "1rem"
              }}></i>
        </div>
      )
    } else if (index == 0) {
      
      return (
        <div key={index} className="backlink-container">
          <Link to={backLink}>home</Link>
          <i className={`bi bi-arrow-right`} style={{
            fontSize: "1rem"
          }}></i>
        </div>
      )
    } else {
      const backlinkStringArray = backLink.split('/')
      return (
        <div key={index} className="backlink-container">
          <Link to={backLink}>{backlinkStringArray[backlinkStringArray.length - 1]}</Link>
        </div>
      )
    }
  })

  return (
    <div className="backlinks-component-container">
      {
        backLinks
      }
    </div>
  )
}

export default BackLinksComponent