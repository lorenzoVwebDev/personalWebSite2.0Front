import { useContext } from "react";
import { SpotifyAuthContext } from "../Context/SpotifyAuthProvider";
import type { SpotifyAuthType } from "@types/types";

const useSpotifyAuth = (): SpotifyAuthType  => {
  const spotifyAuthToken = useContext(SpotifyAuthContext)

  return spotifyAuthToken
}

export default useSpotifyAuth