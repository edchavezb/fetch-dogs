import api from '../index'

export const userLoginApi = async (name: string, email: string) => {
  try {
    return await api.post<{ name: string, email: string }, string>('auth/login', {name, email})
  }
  catch (err) {
    console.log(err)
  }
}

export const userLogoutApi = async () => {
  try {
    return await api.post<{}, string>('auth/logout', {})
  }
  catch (err) {
    console.log(err)
  }
}