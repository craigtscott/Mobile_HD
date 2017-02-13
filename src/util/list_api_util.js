export const fetchAllLists = () => {
  return fetch(`http://localhost:3000/api/lists`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

export const createList = (list) => {
  return fetch(`http://localhost:3000/api/lists`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ list })
  });
};

export const updateList = (list) => {
  return fetch(`http://localhost:3000/api/lists/${list.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ list })
  });
};

export const deleteList = (id) => {
  return fetch(`http://localhost:3000/api/lists/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
};
