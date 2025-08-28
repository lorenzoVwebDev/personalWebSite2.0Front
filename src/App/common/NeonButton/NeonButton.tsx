import type { ReactElement } from 'react';
import './NeonButton.scss'

type PropTypes = {
  action: (arg?: any) => {},
  actionParameters: any
  ,
  buttonText: string,
  classString: string,
  children?: ReactElement
}

function NeonButton({action, buttonText, classString, actionParameters, children}: PropTypes): ReactElement {
  return (
    <button className={classString} onClick={() => action(actionParameters)}>{children ? children : buttonText}</button>
  )
}

export default NeonButton;