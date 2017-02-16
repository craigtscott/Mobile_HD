export const signup = (user) => {
  return fetch(`http://localhost:3000/api/users`, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    body: JSON.stringify({ user })
  });
};


export const login = (user) => (
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
