import { Dog } from '../../types/interfaces'
import api from '../index'

interface DogSearch {
    next: string
    resultIds: string[]
    total: number
}

export const dogSearchApi = async (page: number, isAscending: boolean = true) => {
  try {
    return await api.get<DogSearch>(`dogs/search?size=20&from=${page}`, {})
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