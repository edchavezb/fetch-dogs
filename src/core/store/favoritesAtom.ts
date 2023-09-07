import { atom } from 'jotai';
import { Dog } from '../types/interfaces';

interface FavoritesState {
  dogs: Dog[]
  match?: Dog;
}

const initialFavoritesState: FavoritesState = {
  dogs: [],
  match: undefined
};

export const favoritesAtom = atom(initialFavoritesState);