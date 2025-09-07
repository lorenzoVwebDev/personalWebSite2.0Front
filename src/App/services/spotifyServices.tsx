
export async function getSpotifyAccessToken(setAuthToken: React.Dispatch<React.SetStateAction<any>>) {

  const response = await fetch(`${import.meta.env.VITE_S_API_URI_TOKEN}api/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ grant_type: "client_credentials", client_id: import.meta.env.VITE_S_CLIENT_ID,  client_secret: import.meta.env.VITE_S_CLIENT_SECRET})
  })
  
  if (response.status >= 200 && response.status < 400) {
    const parsedResponse = await response.json()
    setAuthToken(parsedResponse)
  }
}

export function connectSpotifySdk(setDevice_id, setTrack, setPaused, tokenObj) {
  const script = document.createElement("script");
  script.src = "https://sdk.scdn.co/spotify-player.js";
  script.async = true;

  document.body.appendChild(script);

  window.onSpotifyWebPlaybackSDKReady = () => {

    const player = new window.Spotify.Player({
        name: 'Web Playback SDK',
        getOAuthToken: cb => { cb(tokenObj?.access_token); },
        volume: 0.5
    });

    player.addListener('ready', ({ device_id }) => {
      setDevice_id(device_id)
      console.log('Ready with Device ID', device_id);
    });

    player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
    });

    player.addListener('player_state_changed', ( state => {
        if (!state) {
            return;
        }

        setTrack(state.track_window.current_track);
        setPaused(state.paused);

/* 
        player.getCurrentState().then( state => { 
            (!state)? setActive(false) : setActive(true) 
        }); */

    }));

    player.connect();

  };
}