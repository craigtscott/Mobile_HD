export const fetchAllTasks = (rowData) => {
  return fetch(`http://localhost:3000/api/lists/${rowData.id}/tasks/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
};

export const createTask = (task) => {
  return fetch(`http://localhost:3000/api/tasks`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  });
};

export const updateTask = (task) => {
  return fetch(`http://localhost:3000/api/tasks/${task.id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ task })
  });
};

export const deleteTask = (id) => {
  return fetch(`http://localhost:3000/api/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  });
};
