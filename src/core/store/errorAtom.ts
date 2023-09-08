import { atom } from 'jotai';

interface ErrorState {
    isError: boolean
    message: string
}

const initialErrorState: ErrorState = {
    isError: false,
    message: ""
};

export const errorAtom = atom(initialErrorState);