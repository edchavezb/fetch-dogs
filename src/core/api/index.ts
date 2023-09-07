const apiURL = 'https://frontend-take-home-service.fetch.com'

const api = {
  get: async <R>(endpoint: string, params: { [key: string]: string }, arrayParams: { [key: string]: string[] }) => {
    const url = new URL(`${apiURL}/${endpoint}`);
    let queryParams = new URLSearchParams(params);
    if (arrayParams) {
      for (const [key, valueArray] of Object.entries(arrayParams)) {
        for (const element of valueArray) {
          queryParams.append(key, element);
        }
      }
    }
    url.search = queryParams.toString();
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