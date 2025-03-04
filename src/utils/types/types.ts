export interface Radio {
  stationuuid: string;
  name: string;
  url: string;
  url_resolved: string;
  homepage: string;
  favicon: string;
  country: string;
  language: string;
  votes: number;
  codec: string;
  bitrate: number;
}

export interface RadioStore {
  allRadios: Radio[];
  favoriteRadios: Radio[];
  setAllRadios: (radios: Radio[]) => void;
  addFavorite: (radio: Radio) => void;
  removeFavorite: (stationuuid: string) => void;
  editFavorite: (stationuuid: string, updatedRadio: Partial<Radio>) => void;
}