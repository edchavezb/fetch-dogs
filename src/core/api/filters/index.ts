import api from '../index';
import { Location } from '../../types/interfaces';

export const getDogBreedsApi = async () => {
  try {
    return await api.get<string[]>(`dogs/breeds`, {})
  }
  catch (err) {
    console.log(err)
  }
};

export const zipCodesSearchApi = async (city: string, states: string[]) => {
  try {
    return await api.post<{city: string, states: string[], size: number}, {results: Location[], total: number}>(`locations/search`, {city, states, size: 300})
  }
  catch (err) {
    console.log(err)
  }
};