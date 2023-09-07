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
  ageMax: string = '10'
) => {
  try {
    return await api.get<DogSearch>('dogs/search', {
      size: "20",
      from,
      ageMin,
      ageMax,
    },
    {
      breeds,
      zipCodes
    }
    )
  }
  catch (err) {
    console.log(err)
  }
}

export const getDogsByIdApi = async (dogIds: string[]) => {
  try {
    return await api.post<string[], Dog[]>('dogs/', dogIds)
  }
  catch (err) {
    console.log(err)
  }
}

export const getDogMatchApi = async (dogIds: string[]) => {
  try {
    return await api.post<string[], {match: string}>('dogs/match', dogIds)
  }
  catch (err) {
    console.log(err)
  }
}