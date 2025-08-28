import React, { createContext, useState, useEffect } from "react";
import { getSpotifyAccessToken } from "../services/spotifyServices";
import { type SpotifyAuthType } from "../../types/types";

const initSpotifyAuthContext: SpotifyAuthType = {
  access_token: "",
  token_type: "",
  expires_in: 0
};

export const SpotifyAuthContext = createContext<SpotifyAuthType>(initSpotifyAuthContext)

type PropTypes = {
  children?: React.ReactElement
}

const SpotifyAuthProvider = ({children}: PropTypes) => {
  const [authToken, setAuthToken] = useState<SpotifyAuthType>(initSpotifyAuthContext)

  useEffect(() => {
    getSpotifyAccessToken(setAuthToken);

    const id = setInterval(() => getSpotifyAccessToken(setAuthToken), 3600 * 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <SpotifyAuthContext value={authToken}>
      {children}
    </SpotifyAuthContext>
  )
}

export default SpotifyAuthProvider