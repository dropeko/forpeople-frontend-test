import { create } from 'zustand';
import { RadioStore } from '../utils/types/types';

const useRadioStore = create<RadioStore>((set) => ({
  allRadios: [],
  favoriteRadios: [],
  setAllRadios: (radios) => set({ allRadios: radios }),
  addFavorite: (radio) =>
    set((state) => {
      const isAlreadyFavorite = state.favoriteRadios.some(
        (fav) => fav.stationuuid === radio.stationuuid
      );
      if (isAlreadyFavorite) return state;
      return { favoriteRadios: [...state.favoriteRadios, radio] };
    }),
  removeFavorite: (stationuuid) =>
    set((state) => ({
      favoriteRadios: state.favoriteRadios.filter(
        (radio) => radio.stationuuid !== stationuuid
      ),
    })),
  editFavorite: (stationuuid, updatedRadio) =>
    set((state) => ({
      favoriteRadios: state.favoriteRadios.map((radio) =>
        radio.stationuuid === stationuuid ? { ...radio, ...updatedRadio } : radio
      ),
    })),
}));

export default useRadioStore;