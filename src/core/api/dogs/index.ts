import { Dog } from '../../types/interfaces'
import api from '../index'

interface DogSearch {
  next: string
  resultIds: string[]
  total: number
}

export const dogSearchApi = async (
  from: string,
  zipCodes: string[],
  breeds: string[],
  ageMin: string = '1',
  ageMax: string = '20',
  sortField: string,
  sortDirection: string
) => {
  try {
    return await api.get<DogSearch>(
      'dogs/search',
      {
        size: "20",
        from,
        ageMin,
        ageMax,
        sort: sortField ? `${sortField}:${sortDirection}` : ""
      },
      {
        breeds,
        zipCodes
      }
    )
  }
  catch (err) {
    console.log((err as Error).message)
    throw new Error((err as Error).message)
  }
}

export const getDogsByIdApi = async (dogIds: string[]) => {
  try {
    return await api.post<string[], Dog[]>('dogs/', dogIds)
  }
  catch (err) {
    console.log((err as Error).message)
    throw new Error((err as Error).message)
  }
}

export const getDogMatchApi = async (dogIds: string[]) => {
  try {
    return await api.post<string[], { match: string }>('dogs/match', dogIds)
  }
  catch (err) {
    console.log((err as Error).message)
    throw new Error((err as Error).message)
  }
}