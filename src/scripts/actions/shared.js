
export function getHeaders() {
    const user = localStorage.getItem('user');
    return {
      headers: {
        authorization: `token ${user}`
      }
    }
  }