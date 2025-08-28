
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