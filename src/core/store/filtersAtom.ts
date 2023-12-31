import { atom } from 'jotai';
import { SelectOption } from '../../components/styled/MultiSelect/MultiSelect';
import { USA_STATES } from '../constants/states';
import { DOG_AGES } from '../constants/ages';

interface FiltersState {
  stateOptions: SelectOption[]
  selectedStates: readonly SelectOption[]
  cityOptions: SelectOption[];
  selectedCity?: SelectOption
  zipCodeOptions: SelectOption[]
  selectedZipCodes: readonly SelectOption[]
  dogBreedOptions: SelectOption[]
  selectedDogBreeds: readonly SelectOption[]
  ageOptions: SelectOption[]
  ageMin?: SelectOption
  ageMax?: SelectOption
  sortBy: string
  sortDirection: string
  page: number
}

const initialFiltersState: FiltersState = {
  stateOptions: USA_STATES,
  selectedStates: [],
  cityOptions: [],
  selectedCity: undefined,
  zipCodeOptions: [],
  selectedZipCodes: [],
  dogBreedOptions: [],
  selectedDogBreeds: [],
  ageOptions: DOG_AGES,
  ageMin: undefined,
  ageMax: undefined,
  sortBy: "",
  sortDirection: "",
  page: 1
};

export const filtersAtom = atom(initialFiltersState);