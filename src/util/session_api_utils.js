export const signup = (user) => {
  return fetch(`www.hd-list.com/api/users`);
  };


export const login = (user) => (
  // fetch(`www.hd-list.com/#/api/session`, {
  fetch(`http://localhost:3000/api/session`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({ user })
  })
);

export const logout = () => (
  fetch(`www.hd-list.com/api/users`, {
    method: 'DELETE'
  })
);
