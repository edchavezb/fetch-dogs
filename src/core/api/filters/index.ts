import api from '../index';
import { Location } from '../../types/interfaces';

export const getDogBreedsApi = async () => {
  try {
    return await api.get<string[]>(`dogs/breeds`, {}, {})
  }
  catch (err) {
    console.log(err)
  }
};

export const locationsSearchApi = async (city: string, states: string[]) => {
  try {
    return await api.post<{city: string, states?: string[], size: number}, {results: Location[], total: number}>(
      `locations/search`, 
      states.length ? {city, states, size: 300} : {city, size: 300}
    )
  }
  catch (err) {
    console.log(err)
  }
};