import { atom } from 'jotai';

interface SearchState {
    searchResults: string[]
}

const initialSearchState: SearchState = {
  searchResults: []
};

export const searchAtom = atom(initialSearchState);