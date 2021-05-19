export function makeHttpService() {
  const __apiBase = "http://localhost:5000";
  return {
    get,
    post,
  };

  async function get(requestUrl, params = {}, headers = {}) {
    const searchParams = new URLSearchParams({ ...params }).toString();
    try {
      const res = await fetch(`${__apiBase}${requestUrl}?${searchParams}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headers,
        },
      });
      if (!res.ok) {
        throw Error(res.status);
      }
      return await res.json();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async function post(requestUrl, params = {}, headers = {}) {
    const searchParams = new URLSearchParams({ ...params }).toString();
    try {
      const res = await fetch(`${__apiBase}${requestUrl}?${searchParams}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          ...headers,
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      return await res.json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
