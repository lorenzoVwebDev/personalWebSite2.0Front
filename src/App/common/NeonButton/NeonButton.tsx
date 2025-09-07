import type { ReactElement } from 'react';
import { type NavigateFunction } from 'react-router';
import './NeonButton.scss'

type PropTypes = {
  action?:  Function,
  actionParameters?: any
  ,
  buttonText?: string,
  classString: string,
  children?: ReactElement,
  type?: string,
  style?: any
}

function NeonButton({action, buttonText, classString, actionParameters, children, type, style}: PropTypes): ReactElement {
  if (type === "SpotifySdkPlayer") {
      return (
    <button className={classString} onClick={async () => await action} style={style}>{children ? children : buttonText}</button>
  )
  } else {
      return (
    <button className={classString} onClick={() => action(actionParameters)} style={style}>{children ? children : buttonText}</button>
  )
  }
}

export default NeonButton;