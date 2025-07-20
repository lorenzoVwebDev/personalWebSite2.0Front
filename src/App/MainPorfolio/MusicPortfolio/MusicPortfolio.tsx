import { useOutletContext } from 'react-router'
import './MusicPortfolio.scss'
type PropTypes = {
  musicProp: string,
  devProp: string,
}
function MusicPortfolio() {
  const Props:  PropTypes = useOutletContext()

  return (
    <>
     {Props.musicProp}
    </>
  )
}

export default MusicPortfolio
