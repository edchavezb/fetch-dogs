import { atom } from 'jotai';

const initialUserState = {
  isLoggedIn: false,
  name: '',
  email: '',
};

export const userAtom = atom(initialUserState);