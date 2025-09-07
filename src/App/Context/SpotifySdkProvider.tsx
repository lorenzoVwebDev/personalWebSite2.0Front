import { createContext, useEffect, useState } from "react";
import { type SpotifySdkContextType } from "@types/types";

export const tokensObject: SpotifySdkContextType | null = {
  access_token: '',
  refresh_token: ''
}

const SpotifySdkContext = createContext<SpotifySdkContextType>(tokensObject)

function SpotifySdkTokenProvider({children, contextState}: {
  children: React.ReactElement,
  contextState: SpotifySdkContextType,
  setContextState?: React.Dispatch<React.SetStateAction<SpotifySdkContextType>>
}): React.ReactElement {

  return (
    <SpotifySdkContext value={contextState}>
     {children}
    </SpotifySdkContext>
  )
}

export default SpotifySdkTokenProvider

/*   const [state, setState] = useState(tokensObject)

  useEffect(() => {
    const spotify_sdk_tokens = localStorage.getItem('spotify_sdk_tokens')
    if (spotify_sdk_tokens) {
      setState(JSON.parse(spotify_sdk_tokens))
    } else {
      const tokenObj: SpotifySdkContextType = {
      access_token: '',
      refresh_token: ''
    }
    const url = new URL(window.location.href)
    const access_token = url.searchParams.get('a')
    const refresh_token = url.searchParams.get('r')
    const expirationTime = url.searchParams.get('exp') 
    if (access_token && refresh_token && expirationTime) {
      tokenObj.access_token = access_token;
      tokenObj.refresh_token = refresh_token
      localStorage.setItem('spotify_sdk_tokens', JSON.stringify(tokenObj))
      setState(tokenObj)
    } 
  }
  }, []) */