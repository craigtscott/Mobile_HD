export const fetchAllTasks = (id) => {

  return fetch(`http://localhost:3000/api/lists/${id}/tasks/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};
