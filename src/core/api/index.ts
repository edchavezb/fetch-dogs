const apiURL = 'https://frontend-take-home-service.fetch.com'

const api = {
  get: async <R>(endpoint: string, params: { [key: string]: string }) => {
    const url = new URL(`${apiURL}/${endpoint}`);
    url.search = new URLSearchParams(params).toString()
    const response = await fetch(url.toString(), {
      credentials: "include",
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return await (response.json() as Promise<R>);
  },
  post: async <D, R>(endpoint: string, postData: D): Promise<R> => {
    const response = await fetch(`${apiURL}/${endpoint}`, {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
    const responseData = await response.json()
    return responseData
  },
}

export default api;