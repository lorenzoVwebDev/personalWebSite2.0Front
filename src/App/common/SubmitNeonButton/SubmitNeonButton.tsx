import type { ReactElement } from 'react';
import './submitNeonButton.scss'

type PropTypes = {
  buttonText: string,
  classString: string,
  children?: ReactElement
}

function SubmitNeonButton({buttonText, classString, children}: PropTypes): ReactElement {
  return (
    <button className={classString} type="submit">{children ? children : buttonText}</button>
  )
}

export default SubmitNeonButton;