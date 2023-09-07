import { atom } from 'jotai';
import { SelectOption } from '../../components/styled/Select';
import { USA_STATES } from '../constants/states';

interface FiltersState {
  cityInput: string
  stateOptions: SelectOption[]
  selectedStates: readonly SelectOption[]
  zipCodeOptions: SelectOption[]
  selectedZipCodes: readonly SelectOption[]
  dogBreedOptions: SelectOption[]
  selectedDogBreeds: readonly SelectOption[]
  sortBy?: "Age" | "Breed" | ""
  sortDirection?: "asc" | "desc" 
}

const initialFiltersState: FiltersState = {
  cityInput: "",
  stateOptions: USA_STATES,
  selectedStates: [],
  zipCodeOptions: [],
  selectedZipCodes: [],
  dogBreedOptions: [],
  selectedDogBreeds: []
};

export const filtersAtom = atom(initialFiltersState);