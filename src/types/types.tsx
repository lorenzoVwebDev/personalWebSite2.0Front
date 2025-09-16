export type SocialObject = {
  name: string,
  link: string
}

export type JobsType = {
    name: string,
    slightDescription: string,
    description: string,
    image: string,
    id: string,
    icon?: string,
    href?: string
  }

export type PortObject = {
    header: string,
    image64: string,
    description: string,
    href: string,
    type: "php" | "reactprojects" | "projects" | "node" | "excelpowerpoint" | "angular",
    linkType: 'newtab' | "params" | "internal" | "html"
  }

export type JobsObject = {
    name: string,
    slightDescription: string,
    description: string,
    image: `${number}.png`,
    id: 'music' | 'webdev' | 'enerconsul',
    icon: 'typescript' | 'lightning' | 'apple-music' | 'music-note-list'
  }
export type SpotifySdkContextType = {
  access_token: string,
  refresh_token: string,
  timeStamp: number,
}
/*   access_token	string	An access token that can be provided in subsequent calls, for example to Spotify Web API services.
token_type	string	How the access token may be used: always "Bearer".
expires_in	int	The time period (in seconds) for which the access token is valid. */

export type SpotifyAuthType = {
  access_token: string,
  token_type: string,
  expires_in: number
}

/* export type TrackType = {
  album: {
    album_type: string;
    total_tracks: number;
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: Array<{
      url: string;
      height: number;
      width: number;
    }>;
    name: string;
    release_date: string;
    release_date_precision: string;
    restrictions?: {
      reason: string;
    };
    type: string;
    uri: string;
    artists: Array<{
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }>;
  };
  artists: Array<{
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
  }>;
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: Record<string, unknown>; // Assuming an empty object, you can replace with a specific type if needed
  restrictions?: {
    reason: string;
  };
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}; */

export type TrackType = {
  album: {
    album_type: "single" | "album" | "compilation";
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: "artist";
      uri: string;
    }[];
    available_markets: string[];
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    images: {
      url: string;
      width: number;
      height: number;
    }[];
    name: string;
    release_date: string;
    release_date_precision: "year" | "month" | "day";
    total_tracks: number;
    type: "album";
    uri: string;
  };
  artists: {
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    name: string;
    type: "artist";
    uri: string;
  }[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string | null;
  track_number: number;
  type: string;
  uri: string;
};


export type OutletContextType = {
  musicPath: string,
  devPath: string
}


