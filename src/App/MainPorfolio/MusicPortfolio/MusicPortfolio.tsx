import { useOutletContext, useHref } from 'react-router'
import './MusicPortfolio.scss'
type PropTypes = {
  musicProp: string,
  devProp: string,
}
function MusicPortfolio() {
  const href = useHref('');

  const Props:  PropTypes = useOutletContext()

  return (
    <section>
     {Props.musicProp}
    </section>
  )
}

export default MusicPortfolio
