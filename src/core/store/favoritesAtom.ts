import { atom } from 'jotai';
import { Dog } from '../types/interfaces';

interface FavoritesState {
    dogs: Dog[]
}

const initialFavoritesState: FavoritesState = {
  dogs: []
};

export const favoritesAtom = atom(initialFavoritesState);